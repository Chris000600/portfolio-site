'use client';

import Project from '@/type/project';
import { useActionState, useEffect, useState } from 'react';
import { updateProject } from '@/lib/projects';

interface ProjectEditFormProps {
  project: Project;
  onClose: () => void;
}

const ProjectEditForm: React.FC<ProjectEditFormProps> = ({
  project,
  onClose
}) => {
  console.log('prj:', project);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, formAction, isPending] = useActionState(updateProject, {
    _id: project._id,
    name: project.name,
    description: project.description,
    technologies: project.technologies,
    liveUrl: project.liveUrl,
    repoUrl: project.repoUrl,
    imageUrl: project.imageUrl
  });

  useEffect(() => {
    console.log('isPending:', isPending);
    if (isPending) {
      setIsSubmitting(true);
    }
    // logic gate to close the form when the project is updated
    if (isSubmitting && !isPending) {
      onClose();
    }
  }, [isPending]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Project</h2>
        <form
          action={formAction}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium">Project Name</label>
            <input
              type="text"
              id="_id"
              name="_id"
              defaultValue={state._id}
              required
              hidden
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={state.name}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              id="description"
              name="description"
              defaultValue={state.description}
              required
              rows={3}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Technologies</label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              defaultValue={state.technologies}
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
              defaultValue={state.liveUrl}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Repository URL</label>
            <input
              type="url"
              id="repoUrl"
              name="repoUrl"
              defaultValue={state.repoUrl}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Image URL</label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              defaultValue={state.imageUrl}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          {state.message && (
            <p className="text-red-500 text-sm">{state.message}</p>
          )}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isPending ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectEditForm;
