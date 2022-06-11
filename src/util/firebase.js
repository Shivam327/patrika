// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, deleteDoc, doc, getFirestore, onSnapshot, query, updateDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDC6vB8BDsoZZ1fYcMREddpjzIWrZJVE0k',
  authDomain: 'patrika-b00e1.firebaseapp.com',
  projectId: 'patrika-b00e1',
  storageBucket: 'patrika-b00e1.appspot.com',
  messagingSenderId: '758636457298',
  appId: '1:758636457298:web:56ddab959c10638b191e8b',
  measurementId: 'G-8RXFQXLYCX',
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export const getData = (setFunc) => {
  const q = query(collection(db, 'IssueMaster'));
  onSnapshot(q, (querySnapshot) => {
    const allData = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
    console.log(allData);
    setFunc(allData);
  });
};

export const handleDelete = async (id) => {
  const taskDocRef = doc(db, 'IssueMaster', id);
  try {
    deleteDoc(taskDocRef);
  } catch (err) {
    alert(err);
  }
};

export const handleChange = async (id, data) => {
  console.log(data, id);
  const ProductDocRef = doc(db, 'IssueMaster', id);
  try {
    await updateDoc(ProductDocRef, {
      IsDelete: data.isDelete,
      IssueDate: data.issueDate,
      IssueId: data.issueId,
      IssueDetail: data.issueDetail,
      IssuePdf: data.issuePdf,
      IssueThumb: data.issueThumb,
    });
  } catch (err) {
    console.log(err);
  }
};

// Initialize Firebase

export { db };
