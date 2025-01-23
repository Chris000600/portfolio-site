import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // From the Cloudinary Dashboard
  api_key: process.env.CLOUDINARY_API_KEY, // From the Cloudinary Dashboard
  api_secret: process.env.CLOUDINARY_API_SECRET // From the Cloudinary Dashboard
});

export default cloudinary;
