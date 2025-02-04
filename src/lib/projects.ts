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

// CREATE project
export async function createProject(prevState, formData) {
  try {
    const project = {
      name: formData.get('name'),
      description: formData.get('description'),
      technologies: formData.get('technologies'),
      liveUrl: formData.get('liveUrl'),
      repoUrl: formData.get('repoUrl'),
      imageUrl: formData.get('imageUrl')
    };

    const response = await uploadImage(project.imageUrl);

    await db.collection('projects').insertOne({
      ...project,
      imageUrl: response
    });

    revalidatePath('/');

    return true;
  } catch (error) {
    console.error(error);

    throw new Error('Failed to create project');
  }
}

export async function updateProject(prevState, formData) {
  console.log('formData:', formData);
  const project = {
    _id: formData.get('_id'),
    name: formData.get('name'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    liveUrl: formData.get('liveUrl'),
    repoUrl: formData.get('repoUrl'),
    imageUrl: formData.get('imageUrl')
  };

  console.log('project:', project._id);

  if (!project._id) {
    throw new Error('Project ID is required');
  }

  const updatedProject = await db.collection('projects').updateOne(
    { _id: new ObjectId(project._id) }, // Find project by ID
    {
      $set: {
        name: project.name,
        description: project.description,
        technologies: project.technologies,
        liveUrl: project.liveUrl,
        repoUrl: project.repoUrl,
        imageUrl: project.imageUrl
      }
    }
  );

  console.log('updatedProject:', updatedProject);

  if (updatedProject.matchedCount === 0) {
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
      console.log('Project deleted successfully:', result);
      // Delete the image from Cloudinary
      const imageName = project.imageUrl.split('/').pop()?.split('.')[0];

      if (imageName) {
        await deleteImage(imageName);

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
