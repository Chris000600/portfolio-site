import { NextRequest, NextResponse } from 'next/server';
import { clientPromise, dbName } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = await context.params;
    const { name, description, technologies, liveUrl, repoUrl, imageUrl } =
      await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Project ID is required.' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(dbName);

    const updatedProject = await db.collection('projects').updateOne(
      { _id: new ObjectId(id) }, // Find project by ID
      {
        $set: {
          name,
          description,
          technologies,
          liveUrl,
          repoUrl,
          imageUrl
        }
      }
    );

    if (updatedProject.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'Project not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Project updated successfully.'
    });
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
