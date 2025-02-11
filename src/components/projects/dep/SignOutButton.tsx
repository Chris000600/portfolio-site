'use client';

import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="red-button text-white font-semibold py-2 px-4 rounded"
      >
        Log Out
      </button>
      <style jsx>{`
        .red-button {
          background-color: #ef4444 !important;
          margin-left: 1rem;
        }
        .red-button:hover {
          background-color: #b91c1c !important;
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
};

export default SignOutButton;
