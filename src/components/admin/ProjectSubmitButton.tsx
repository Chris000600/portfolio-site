'use client';

import { useFormStatus } from 'react-dom';

export default function ProjectSubmitButton({ type }: { type: string }) {
  const { pending } = useFormStatus();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <button
        disabled={pending}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          opacity: pending ? 0.6 : 1,
          transition: 'opacity 0.3s'
        }}
      >
        {pending ? 'Submitting...' : 'Add Project'}
      </button>
    </div>
  );
}
