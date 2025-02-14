'use server';

import { clientPromise, dbName } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { deleteImage, uploadImage } from './cloudinary';
import { revalidatePath } from 'next/cache';

// Access the DB
const client = await clientPromise;
const db = client.db(dbName);

// GET all projects
export async function getProjects() {
  try {
    const projects = await db.collection('projects').find({}).toArray();
    return JSON.stringify(projects);
  } catch (error) {
    console.error(error);

    throw new Error('Unable to get projects');
  }
}

// GET specific project
export async function getProjectById(projectId: string) {
  // make sure project ID is valid
  console.log('projectId:', projectId);
  if (!projectId || !ObjectId.isValid(projectId)) {
    throw new Error('Invalid project ID');
  }

  const objectId = new ObjectId(projectId);

  // make sure project exists
  const project = await db.collection('projects').findOne({ _id: objectId });
  console.log('project:', project);
  if (!project) {
    throw new Error('Project not found');
  }

  return JSON.stringify(project);
}

// CREATE project
export async function createProject(prevState, formData) {
  try {
    const project = {
      title: formData.get('title'),
      date: formData.get('date'),
      technology: formData.get('technology'),
      images: formData.getAll('images'),
      thumbnail: formData.get('thumbnail'),
      link: formData.get('link'),
      description: formData.get('description')
    };

    const imageUploadPromises = project.images.map((image) =>
      uploadImage(image)
    );
    const imageURLs = await Promise.all(imageUploadPromises);

    const thumbURL = await uploadImage(project.thumbnail);

    const updatedProject = {
      ...project,
      thumbnail: thumbURL,
      images: imageURLs
    };

    console.log('updatedProject: ', updatedProject);

    await db.collection('projects').insertOne(updatedProject);

    revalidatePath('/');

    return true;
  } catch (error) {
    console.error(error);

    throw new Error('Failed to create project');
  }
}

// UPDATE project
export async function updateProject(prevState, formData) {
  console.log('formData:', formData);
  const project = {
    _id: formData.get('_id'),
    title: formData.get('title'),
    date: formData.get('date'),
    technology: formData.get('technology'),
    eimages: formData.get('eimages').split(','),
    ethumbnail: formData.get('ethumbnail'),
    nimages: formData.getAll('nimages'),
    nthumbnail: formData.get('nthumbnail'),
    link: formData.get('link'),
    description: formData.get('description')
  };
  console.log('project:', project._id);

  if (!project._id) {
    throw new Error('Project ID is required');
  }

  // update images
  const objectId = new ObjectId(project._id);

  const fetchedProject = await db
    .collection('projects')
    .findOne({ _id: objectId });
  if (!fetchedProject) {
    throw new Error('Project not found');
  }
  // Deletions
  // Thumbnail
  if (project.ethumbnail == '') {
    const imageName = fetchedProject.thumbnail.split('/').pop()?.split('.')[0];
    deleteImage(imageName);
  }
  // Images
  const imagesToDelete = fetchedProject.images.filter(
    (img) => !project.eimages.includes(img)
  );
  console.log('images to delete:', imagesToDelete);

  const imageDeletePromises = imagesToDelete.map((image) => {
    const imageName = image?.split('/').pop()?.split('.')[0];
    deleteImage(imageName);
  });

  await Promise.all(imageDeletePromises);
  // Uploads
  // Thumbnail
  let thumbURL = '';
  if (project.nthumbnail.size != 0) {
    thumbURL = await uploadImage(project.nthumbnail);
  } else {
    thumbURL = project.ethumbnail;
  }

  // Images
  let imageURLs: string[] = [];
  if (project.nimages[0].size != 0) {
    const imageUploadPromises = project.nimages.map((image) =>
      uploadImage(image)
    );
    imageURLs = await Promise.all(imageUploadPromises);
  }

  project.eimages.map((img) => {
    imageURLs.push(img);
  });

  console.log('project.eimages: ', project.eimages);
  console.log('imageURLs: ', imageURLs);

  const updatedProject = {
    _id: project._id,
    title: project.title,
    date: project.date,
    technology: project.technology,
    thumbnail: thumbURL,
    images: imageURLs,
    link: project.link,
    description: project.description
  };

  const response = await db.collection('projects').updateOne(
    { _id: new ObjectId(project._id) }, // Find project by ID
    {
      $set: {
        title: updatedProject.title,
        date: updatedProject.date,
        technology: updatedProject.technology,
        images: updatedProject.images,
        thumbnail: updatedProject.thumbnail,
        link: updatedProject.link,
        description: updatedProject.description
      }
    }
  );

  console.log('updatedProject:', response);

  if (response.matchedCount === 0) {
    throw new Error('Project not found');
  }

  revalidatePath('/');

  return true;
}

// DELETE project
export async function deleteProject(projectId: string) {
  try {
    // make sure project ID is valid
    console.log('projectId:', projectId);
    if (!projectId || !ObjectId.isValid(projectId)) {
      throw new Error('Invalid project ID');
    }

    const objectId = new ObjectId(projectId);

    // make sure project exists
    const project = await db.collection('projects').findOne({ _id: objectId });
    console.log('project:', project);
    if (!project) {
      throw new Error('Project not found');
    }

    // delete project
    const result = await db.collection('projects').deleteOne({ _id: objectId });

    if (result.deletedCount === 1) {
      // Delete the image from Cloudinary
      const imageDeletePromises = project.images.map((image) => {
        const imageName = image.split('/').pop()?.split('.')[0];
        deleteImage(imageName);
      });

      const imagesURL = await Promise.all(imageDeletePromises);

      const thumbURL = await deleteImage(
        project.thumbnail.split('/').pop()?.split('.')[0]
      );

      if (imagesURL && thumbURL) {
        console.log('Images deleted successfully!');

        return true;
      } else {
        throw new Error('Image name invalid');
      }
    } else {
      throw new Error('Failed to delete project from DB');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete project');
  }
}
