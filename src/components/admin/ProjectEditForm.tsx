'use client';

import Project from '@/types/project';
import { useActionState, useEffect, useState } from 'react';
import { updateProject } from '@/lib/projects';
import ImagePicker from '../common/ImagePicker';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

interface ProjectEditFormProps {
  project: Project;
  onClose: () => void;
}

const ProjectEditForm: React.FC<ProjectEditFormProps> = ({
  project,
  onClose
}) => {
  const initState = {
    _id: project._id,
    title: project.title,
    date: project.date,
    technology: project.technology,
    eimages: project.images,
    ethumbnail: project.thumbnail,
    nimages: [],
    nthumbnail: '',
    link: project.link,
    description: project.description
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, formAction, isPending] = useActionState(
    updateProject,
    initState
  );

  const [description, setDescription] = useState(initState.description);
  const [thumbnail, setThumbnail] = useState(initState.ethumbnail);
  const [images, setImages] = useState(initState.eimages);
  const [joinedImages, setJoinedImages] = useState(images.join(','));

  useEffect(() => {
    if (isPending) {
      setIsSubmitting(true);
    }
    // logic gate to close the form when the project is updated
    if (isSubmitting && !isPending) {
      onClose();
    }
  }, [isPending]);

  useEffect(() => {
    setJoinedImages(images.join(','));
  }, [images]);

  const handleImageDelete = (image: string) => {
    setImages((prevImages) => prevImages.filter((img) => img !== image));
  };

  return (
    <div
      className="contact-form contact-form-area wow fadeInUp delay-0-4s"
      style={{ maxHeight: '80vh', overflowY: 'auto' }}
    >
      <h1
        style={{
          color: 'black',
          padding: '1rem',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold'
        }}
      >
        Edit Project
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
                id="_id"
                name="_id"
                defaultValue={project._id.toString()}
                required
                hidden
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={project.title}
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
                    defaultValue={project.date}
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
                    defaultValue={project.link}
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
                defaultValue={project.technology}
                className="form-control"
                required
              />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor={'thumbnail-e'}>Existing Thumbnail</label>
                  <input
                    type="text"
                    id="ethumbnail"
                    name="ethumbnail"
                    className="form-control"
                    value={thumbnail}
                    onChange={() => null}
                  />
                  {thumbnail != '' && (
                    <div
                      style={{ position: 'relative', display: 'inline-block' }}
                    >
                      <img
                        src={thumbnail}
                        alt={thumbnail}
                        style={{
                          height: '100px',
                          width: 'auto',
                          objectFit: 'contain'
                        }}
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setThumbnail('');
                        }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          background: 'transparent',
                          border: 'none',
                          backgroundColor: 'red'
                        }}
                        className="px-2"
                      >
                        <i className="far fa-trash"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <label htmlFor={'thumbnail-e'}>Existing Images</label>
                  <input
                    type="text"
                    id="eimages"
                    name="eimages"
                    className="form-control"
                    value={joinedImages}
                    onChange={() => null}
                  />
                  <div className="row">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={'col-md-3'}
                        style={{
                          position: 'relative',
                          display: 'inline-block'
                        }}
                      >
                        <img
                          src={image}
                          alt={`Selected image ${index + 1}`}
                          style={{
                            height: '100px',
                            width: 'auto',
                            objectFit: 'contain',
                            display: 'block',
                            margin: '0 auto'
                          }}
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleImageDelete(image);
                          }}
                          style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            background: 'transparent',
                            border: 'none',
                            backgroundColor: 'red'
                          }}
                          className="px-2"
                        >
                          <i className="far fa-trash"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <ImagePicker
                    label="Select Thumbnail"
                    name="nthumbnail"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <ImagePicker
                    label="Project Images"
                    name="nimages"
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
                height={200}
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

          {state.message && (
            <p className="text-red-500 text-sm">{state.message}</p>
          )}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 1rem',
              marginBottom: '2rem'
            }}
          >
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 text-white rounded"
              style={{
                backgroundColor: '#ef4444'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="py-2 px-4 text-white rounded"
              style={{
                backgroundColor: '#007bff'
              }}
            >
              {isPending ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectEditForm;
