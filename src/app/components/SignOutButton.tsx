'use client';

import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
    >
      Log Out
    </button>
  );
};

export default SignOutButton;
