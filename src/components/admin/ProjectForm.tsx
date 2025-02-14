'use client';

import { useActionState, useState } from 'react';
import { createProject } from '@/lib/projects';
import ImagePicker from '../common/ImagePicker';
import ProjectSubmitButton from './ProjectSubmitButton';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

const ProjectForm = () => {
  const initState = {
    title: '',
    date: '',
    technology: [],
    images: [],
    thumbnail: '',
    link: '',
    description: ''
  };
  const [description, setDescription] = useState(initState.description);

  const [state, formAction] = useActionState(createProject, initState);

  return (
    <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
      <h1
        style={{
          color: 'black',
          padding: '1rem',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold'
        }}
      >
        Add a New Project
      </h1>
      <form
        action={formAction}
        className="space-y-6 px-4"
      >
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md space-y-4">
            <div className="form-group">
              <label htmlFor="title">Project Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                placeholder="Project Title"
                required
              />
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="date">Project Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-9">
                <div className="form-group">
                  <label htmlFor="name">Project Link</label>
                  <input
                    type="url"
                    id="link"
                    name="link"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="technology">Project Technology</label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="form-control"
                required
              />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <ImagePicker
                    label="Select Thumbnail"
                    name="thumbnail"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <ImagePicker
                    label="Project Images"
                    name="images"
                    multiple
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Project Description</label>
              <textarea
                value={description}
                onChange={() => null}
                id="description"
                name="description"
                rows={4}
                className="form-control"
                required
                hidden
              />
              <MDEditor
                value={description}
                onChange={(value) => setDescription(value as string)}
                id="description"
                preview="live"
                height={300}
                style={{ borderRadius: 20, overflow: 'hidden' }}
                textareaProps={{
                  placeholder: 'Briefly describe your project'
                }}
                previewOptions={{
                  disallowedElements: ['style'],
                  rehypePlugins: [[rehypeSanitize]]
                }}
              />
            </div>
          </div>
        </div>

        {state.message && (
          <p className="text-sm text-blue-600 mt-2">{state.message}</p>
        )}

        <div className="mt-6">
          <ProjectSubmitButton type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
