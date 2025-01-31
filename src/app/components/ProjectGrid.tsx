'use client';

import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface Project {
  _id: string; // Add unique ID field
  name: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
  imageUrl: string;
}

export default function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        if (data.success) {
          setProjects(data.data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Function to add a new project to the list
  const handleProjectAdded = (newProject: Project) => {
    setProjects((prevProjects) => [newProject, ...prevProjects]);
  };

  const handleUpdate = (updatedProject: Project) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project._id === updatedProject._id ? updatedProject : project
      )
    );
  };

  // Function to delete a project from the list
  const handleProjectDeleted = (projectId: string) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project._id !== projectId)
    );
    alert('Project deleted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <ProjectForm onProjectAdded={handleProjectAdded} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <ProjectCard
            key={project._id} // Use unique ID as key
            project={project}
            onUpdate={handleUpdate}
            onProjectDeleted={handleProjectDeleted} // Pass the delete handler
          />
        ))}
      </div>
    </div>
  );
}
