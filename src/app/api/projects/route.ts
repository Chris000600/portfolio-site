import { NextResponse } from 'next/server';
import { clientPromise, dbName } from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);

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

export async function POST(req: Request) {
  try {
    const { name, description, technologies, liveUrl, repoUrl, imageUrl } =
      await req.json();
    const client = await clientPromise;
    const db = client.db(dbName);

    await db.collection('projects').insertOne({
      name,
      description,
      technologies,
      liveUrl,
      repoUrl,
      imageUrl
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
