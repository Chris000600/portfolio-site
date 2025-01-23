import { NextResponse } from 'next/server';

export async function GET() {
  const timestamp = Math.floor(Date.now() / 1000); // Current timestamp
  const preset = 'portfolio-site'; // Replace with your unsigned upload preset
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

  return NextResponse.json({
    url: `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    uploadPreset: preset
  });
}
