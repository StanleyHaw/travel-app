'use client';
import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <button className="bg-red-500 p-2" onClick={() => signOut()}>
      Sign out
    </button>
  );
}
