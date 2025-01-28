import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAv_Bj30eT7E5d_p4kVQYTWKmwfG_FRlsU',
  authDomain: 'blog-be07d.firebaseapp.com',
  projectId: 'blog-be07d',
  storageBucket: 'blog-be07d.firebasestorage.app',
  messagingSenderId: '462784619319',
  appId: '1:462784619319:web:89010e1216cb3203ac30b2',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
