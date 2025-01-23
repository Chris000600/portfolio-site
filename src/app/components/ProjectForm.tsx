'use client';

import { useState } from 'react';

interface Project {
  _id: string; // Add unique ID field
  name: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
  imageUrl: string;
}

interface ProjectFormProps {
  onProjectAdded: (project: Project) => void; // Callback to update the project list
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onProjectAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Add a key to reset file input

  // Handle image upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    const fileSizeMB = file.size / (1024 * 1024); // Convert size to MB

    // Validation for file size and type
    if (fileSizeMB > 15) {
      alert('File size exceeds 15MB. Please upload a smaller image.');
      return;
    }

    const formData = new FormData();
    setIsUploading(true);

    try {
      // Fetch Cloudinary upload URL and preset
      const response = await fetch('/api/upload-url');
      const { url, uploadPreset } = await response.json();

      // Append file and preset to FormData
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);

      // Upload to Cloudinary
      const uploadResponse = await fetch(url, {
        method: 'POST',
        body: formData
      });

      const uploadData = await uploadResponse.json();

      if (uploadData.secure_url) {
        setImageUrl(uploadData.secure_url); // Set the image URL
      } else {
        alert('Image upload failed.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('An error occurred while uploading the image.');
    } finally {
      setIsUploading(false);
    }
  };

  const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Check if image upload was successful
    if (!imageUrl) {
      setError('Please upload an image before submitting the form.');
      setIsSubmitting(false);
      return;
    }

    const projectData = {
      _id: generateUniqueId(),
      name,
      description,
      technologies: technologies.split(',').map((tech) => tech.trim()),
      liveUrl,
      repoUrl,
      imageUrl
    };

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData)
      });

      const result = await response.json();

      if (result.success) {
        // Reset form on successful submission
        setName('');
        setDescription('');
        setTechnologies('');
        setLiveUrl('');
        setRepoUrl('');
        setImageUrl('');
        setFileInputKey(Date.now()); // Reset file input by changing its key
        onProjectAdded(projectData); // Add the project to the state in ProjectGrid
      } else {
        setError('Failed to add the project. Please try again.');
      }
    } catch (error) {
      setError('Error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add a New Project</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Project Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Technologies</label>
          <input
            type="text"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            required
            placeholder="Comma-separated (e.g., Next.js, MongoDB)"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Live URL</label>
          <input
            type="url"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Repository URL</label>
          <input
            type="url"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/webp" // Restrict file types
            onChange={handleImageUpload}
            key={fileInputKey} // Add key to reset file input
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {isUploading && <p className="text-blue-500 text-sm">Uploading...</p>}
          {imageUrl && (
            <div className="mt-2">
              <p className="text-green-600 text-sm">Image uploaded:</p>
              <img
                src={imageUrl}
                alt="Uploaded preview"
                className="mt-2 w-32 h-32 object-cover border"
              />
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting || isUploading} // Disable button while uploading
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isSubmitting ? 'Submitting...' : 'Add Project'}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
