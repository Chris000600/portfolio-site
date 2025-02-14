'use client';

import React, { useState } from 'react';
import ProjectEditForm from './ProjectEditForm';
import Project from '@/types/project';
import { deleteProject } from '@/lib/projects';
import Link from 'next/link';
import Modal from '@/modals/Modal';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteProject(project._id.toString());
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('An error occurred while deleting the project.');
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300">
      {project?.thumbnail && (
        <img
          style={{
            height: '300px',
            width: '100%',
            objectFit: 'cover'
          }}
          src={project.thumbnail}
          alt={project.title}
        />
      )}
      <div className="p-4 text-black">
        <h2 className="font-bold text-xl mb-3 text-black">{project.title}</h2>
        <p className="text-gray-700 text-base mb-2">{project.date}</p>
        <p className="text-sm text-gray-500 mb-2">
          <strong>Technologies:</strong> {project.technology}
        </p>
        <div
          className="flex justify-between items-center mb-2"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Link
            target="_blank"
            href={`/projects/${project._id.toString()}`}
          >
            Open Project
          </Link>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
          )}
        </div>
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            gap: '10px',
            flexDirection: 'row-reverse'
          }}
        >
          <button
            onClick={handleDelete}
            className="px-2"
          >
            <i className="far fa-trash"></i>
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="px-2"
          >
            <i className="far fa-edit"></i>
          </button>
        </div>
      </div>
      {isEditing && (
        <Modal>
          <ProjectEditForm
            project={project}
            onClose={() => setIsEditing(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProjectCard;
