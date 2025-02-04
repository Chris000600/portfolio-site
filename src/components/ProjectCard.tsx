'use client';

import React, { useState } from 'react';
import ProjectEditForm from './ProjectEditForm';
import { ObjectId } from 'mongodb';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
  imageUrl: string;
  _id: ObjectId; // Add project ID
}

interface ProjectCardProps {
  project: Project;
  onUpdate: (updatedProject: Project) => void;
  onProjectDeleted: (projectId: ObjectId) => void; // Add delete handler prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onUpdate,
  onProjectDeleted
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/projects?projectId=${project._id}`, {
        method: 'DELETE'
      });

      const result = await response.json();

      if (result.success) {
        onProjectDeleted(project._id); // Call the delete handler

        // Archive the image in Cloudinary
        if (project.imageUrl) {
          const imageName = project.imageUrl.split('/').pop()?.split('.')[0];
          if (imageName) {
            await fetch(`/api/upload-url?imageName=${imageName}`, {
              method: 'POST'
            });
          }
        }
      } else {
        alert('Failed to delete the project. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('An error occurred while deleting the project.');
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300">
      {project.imageUrl && (
        <img
          className="w-full h-48 object-cover"
          src={project.imageUrl}
          alt={project.name}
        />
      )}
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{project.name}</h2>
        <p className="text-gray-700 text-base mb-2">{project.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Technologies:</strong> {project.technologies.join(', ')}
        </p>
        <div className="flex justify-between items-center">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Repo
            </a>
          )}
          <button
            onClick={handleDelete}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>
        </div>
      </div>
      {isEditing && (
        <ProjectEditForm
          project={project}
          onClose={() => setIsEditing(false)}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};

export default ProjectCard;
