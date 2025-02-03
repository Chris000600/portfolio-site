import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { revalidatePath } from 'next/cache';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const publicIdPrefix = 'portfolio-site/';
const uploadPreset = 'portfolio-site';
const uploadURL = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;

export async function uploadImage(image: File) {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', uploadPreset);

  try {
    // Upload to Cloudinary
    const uploadResponse = await fetch(uploadURL, {
      method: 'POST',
      body: formData
    });

    const uploadData = await uploadResponse.json();

    if (uploadData.secure_url) {
      return NextResponse.json({
        success: true,
        image_url: uploadData.secure_url
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to upload image' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Unable to upload image' },
      { status: 500 }
    );
  }
}

export async function deleteImage(imageName: string) {
  const publicId = `${publicIdPrefix}${imageName}`;
  try {
    console.log(`Deleting asset with public ID: "${publicId}"...`);

    // Use Cloudinary's destroy method to delete the asset
    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === 'ok') {
      console.log('Image deleted successfully:', result);

      revalidatePath('/');
      return NextResponse.json({ success: true });
    } else {
      console.log('Failed to delete image:', result);
      return NextResponse.json(
        { success: false, error: 'Failed to delete image from DB' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Unable to delete image' },
      { status: 500 }
    );
  }
}
