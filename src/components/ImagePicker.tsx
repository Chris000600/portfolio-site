'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  // Function to handle the click event on the "Pick an Image" button
  function handlePickClick() {
    imageInput.current?.click();
  }

  // Function to handle the change event when an image is selected
  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      // If no file is selected, reset the preview and error
      setPickedImage(null);
      setError(null);
      return;
    }

    const fileSizeMB = file.size / (1024 * 1024); // Convert size to MB

    if (fileSizeMB > 15) {
      // If file size exceeds 15MB, set an error and reset the preview
      setError('File size exceeds 15MB. Please upload a smaller image.');
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      // Set the picked image and clear any existing error
      setPickedImage(fileReader.result);
      setError(null);
    };

    // Read the file as a data URL
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col items-center">
      {/* Label for the file input */}
      <label
        htmlFor={name}
        className="mb-2 text-sm font-medium"
      >
        {label}
      </label>

      {/* Hidden file input */}
      <input
        type="file"
        id={name}
        accept="image/png, image/jpeg"
        name={name}
        ref={imageInput}
        onChange={handleImageChange}
        required
        className="hidden"
      />

      {/* Button to trigger the file input click */}
      <button
        type="button"
        onClick={handlePickClick}
        className="mb-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Pick an Image
      </button>

      {/* Display the selected image or messages */}
      <div className="mt-2">
        {error && <p className="text-sm text-red-500">{error}</p>}
        {!pickedImage && !error && (
          <p className="text-sm text-gray-500">No image picked yet.</p>
        )}
        {pickedImage && (
          <div className="relative w-32 h-32 mt-2">
            <Image
              src={typeof pickedImage === 'string' ? pickedImage : ''}
              alt="The image selected by the user."
              layout="fill"
              objectFit="cover"
              className="rounded border"
            />
          </div>
        )}
      </div>
    </div>
  );
}
