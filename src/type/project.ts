import { ObjectId } from 'mongodb';

export default interface Project {
  _id: ObjectId; // Add unique ID field
  name: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
  imageUrl: string;
}
