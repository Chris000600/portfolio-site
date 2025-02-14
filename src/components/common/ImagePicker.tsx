'use client';

import { useState, ChangeEvent } from 'react';

interface ImagePickerProps {
  label: string;
  name: string;
  multiple?: boolean;
  required?: boolean;
}

export default function ImagePicker({
  label,
  name,
  multiple,
  required
}: ImagePickerProps) {
  const [pickedImages, setPickedImages] = useState<string[]>([]);

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files || []);

    if (files.length === 0) {
      setPickedImages([]);
      return;
    }

    // Create object URLs for immediate preview
    const objectUrls = files.map((file) => URL.createObjectURL(file));
    setPickedImages(objectUrls);

    // Cleanup old object URLs when component unmounts
    return () => {
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <label htmlFor={name}>{label}</label>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
          className="form-control"
          multiple={multiple}
          required={required}
        />
      </div>

      {pickedImages.length > 0 && (
        <div className="row g-4">
          {pickedImages.map((image, index) => (
            <div
              key={index}
              className={multiple ? 'col-md-3' : ''}
            >
              <img
                src={image}
                alt={`Selected image ${index + 1}`}
                style={{
                  height: '100px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
