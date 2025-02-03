import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function GET() {
  const preset = 'portfolio-site'; // Replace with your unsigned upload preset
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

  return NextResponse.json({
    url: `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    uploadPreset: preset
  });
}

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);
    const imageName = url.searchParams.get('imageName');

    if (!imageName) {
      return NextResponse.json(
        { success: false, error: 'Invalid Image Name' },
        { status: 400 }
      );
    }

    const publicId = `portfolio-site/${imageName}`;

    try {
      console.log(`Deleting asset with public ID: "${publicId}"...`);

      // Use Cloudinary's destroy method to delete the asset
      const result = await cloudinary.uploader.destroy(publicId);

      if (result.result === 'ok') {
        console.log('Image deleted successfully:', result);
      } else {
        console.log('Failed to delete image:', result);
      }

      return NextResponse.json({ success: true });
    } catch (error) {
      return NextResponse.json(
        { success: false, error: 'Failed to delete image' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
