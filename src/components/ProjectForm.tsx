'use client';

import { useActionState, useState } from 'react';
import { uploadImage } from '@/lib/cloudinary';
import { createProject } from '@/lib/projects';
import ImagePicker from './ImagePicker';
import ProjectSubmitButton from './ProjectSubmitButton';

const ProjectForm = () => {
  const [state, formAction] = useActionState(createProject, {
    name: '',
    description: '',
    technologies: '',
    liveUrl: '',
    repoUrl: '',
    imageUrl: ''
  });

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add a New Project</h2>
      <form
        action={formAction}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Project Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Technologies</label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            required
            placeholder="Comma-separated (e.g., Next.js, MongoDB)"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Live URL</label>
          <input
            type="url"
            id="liveUrl"
            name="liveUrl"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Repository URL</label>
          <input
            type="url"
            id="repoUrl"
            name="repoUrl"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <ImagePicker
            label="select image"
            name="imageUrl"
          />
        </div>
        {state.message && <p>{state.message}</p>}
        <p>
          <ProjectSubmitButton type="submit" />
        </p>
      </form>
    </div>
  );
};

export default ProjectForm;
