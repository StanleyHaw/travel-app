import admin, { ServiceAccount } from 'firebase-admin';
import { initializeApp, cert, getApps } from 'firebase-admin/app';

const serviceAccount: ServiceAccount = {
  projectId: process.env.AUTH_FIREBASE_PROJECT_ID!,
  privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
  clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL!,
};

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

export const adminAuth = admin.auth();
export const adminFirestore = admin.firestore();
