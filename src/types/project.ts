import { ObjectId } from 'mongodb';

export default interface Project {
  _id: ObjectId; // Add unique ID field
  title: string;
  date: string;
  technology: string[];
  images: string[];
  thumbnail: string;
  link: string;
  description: string;
}
