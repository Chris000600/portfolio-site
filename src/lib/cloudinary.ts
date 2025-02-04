'use server';

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

export async function uploadImage(image: string) {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', uploadPreset);

  console.log('upload img:', formData.get('file'));

  try {
    // Upload to Cloudinary
    const uploadResponse = await fetch(uploadURL, {
      method: 'POST',
      body: formData
    });

    const uploadData = await uploadResponse.json();

    if (uploadData) {
      return uploadData.secure_url;
    } else {
      throw new Error('Failed to upload image');
    }
  } catch (error) {
    throw new Error('Unable to upload image');
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

      return true;
    } else {
      console.log('Failed to delete image:', result);
      throw new Error('Failed to delete image from DB');
    }
  } catch (error) {
    throw new Error('Unable to delete image');
  }
}
