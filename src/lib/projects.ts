import { NextResponse } from 'next/server';
import { clientPromise, dbName } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import Project from '@/type/project';
import { deleteImage } from './cloudinary';
import { revalidatePath } from 'next/cache';

// GET all projects
export async function getProjects() {
  const response = await fetch('/api/projects');
  return response;
}

// Access the DB
const client = await clientPromise;
const db = client.db(dbName);

// CREATE project
export async function createProject(project: Project) {
  try {
    await db.collection('projects').insertOne(project);

    revalidatePath('/');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: 'Failed to create project' },
      { status: 500 }
    );
  }
}

// DELETE project
export async function deleteProject(projectId: ObjectId) {
  try {
    // make sure project ID is valid
    if (!projectId || !ObjectId.isValid(projectId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid Project ID' },
        { status: 400 }
      );
    }

    // make sure project exists
    const project = await db.collection('projects').findOne({ _id: projectId });
    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    // delete project
    const result = await db
      .collection('projects')
      .deleteOne({ _id: projectId });

    if (result.deletedCount === 1) {
      // Delete the image from Cloudinary
      const imageName = project.imageUrl.split('/').pop()?.split('.')[0];

      if (imageName) {
        deleteImage(imageName);
      } else {
        return NextResponse.json(
          { success: false, error: 'Image name invalid' },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to delete project from DB' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}
