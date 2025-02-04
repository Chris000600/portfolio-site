import { NextResponse } from 'next/server';
import { clientPromise, dbName } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const client = await clientPromise;
const db = client.db(dbName);

// API to fetch projects
export async function GET() {
  try {
    const projects = await db.collection('projects').find({}).toArray();

    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// API to create projects
export async function POST(req: Request) {
  try {
    const { name, description, technologies, liveUrl, repoUrl, imageUrl } =
      await req.json();

    const _id = new ObjectId();

    await db.collection('projects').insertOne({
      _id,
      name,
      description,
      technologies,
      liveUrl,
      repoUrl,
      imageUrl
    });

    return NextResponse.json({ success: true, data: _id });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const projectId = url.searchParams.get('projectId');

    if (!projectId || !ObjectId.isValid(projectId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid Project ID' },
        { status: 400 }
      );
    }

    const project = await db
      .collection('projects')
      .findOne({ _id: new ObjectId(projectId) });

    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    const result = await db
      .collection('projects')
      .deleteOne({ _id: new ObjectId(projectId) });

    if (result.deletedCount === 1) {
      return NextResponse.json({ success: true, imageUrl: project.imageUrl });
    } else {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
