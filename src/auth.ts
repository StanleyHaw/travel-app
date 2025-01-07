import NextAuth from 'next-auth';
import authConfig from '../auth.config';
import { FirestoreAdapter } from '@auth/firebase-adapter';
import { adminFirestore } from '@/lib/firebase/firebase-admin';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter(adminFirestore),
  session: { strategy: 'jwt' },
  ...authConfig,
});
