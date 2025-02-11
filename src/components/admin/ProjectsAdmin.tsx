'use client';
import React, { useState } from 'react';
import ProjectForm from '../projects/dep/ProjectForm';
import ProjectCard from '../projects/dep/ProjectCard';

type Project = {
  id: number;
  title: string;
};

export default function ProjectsAdmin({ projects }) {
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editTitle, setEditTitle] = useState('');

  // Delete project
  const deleteProject = (id: number) => {};

  // Prepare edit form
  const startEdit = (project: Project) => {
    setEditingProject(project);
    setEditTitle(project.title);
  };

  // Update project
  const updateProject = (e: React.FormEvent) => {};

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <ProjectForm />
        </div>
        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {projects.map((project) => (
              <div
                className="col"
                key={project._id.toString()}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
