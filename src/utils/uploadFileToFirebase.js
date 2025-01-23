import { ref, uploadBytes,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebaseConfig";
import { v4 as uuidv4 } from "uuid"; // For generating unique filenames

export const uploadFileToFirebase = async (file, folder = "uploads") => {
  try {
    // Generate a unique filename for the file
    const fileName = `${folder}/${uuidv4()}_${file.name}`;
    const fileRef = ref(storage, fileName);

    // Upload the file to Firebase Storage
    const snapshot = await uploadBytes(fileRef, file);
    
    // Get the downloadable URL for the uploaded file
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file to Firebase:", error);
    throw error;
  }
};

export const uploadVideoToFirebase = async (file, folder = "uploads") => {
  try {
    // Generate a unique filename for the file
    const fileName = `${folder}/${uuidv4()}_${file.name}`;
    const fileRef = ref(storage, fileName);

    // Upload the file to Firebase Storage  
    const snapshot = await uploadBytesResumable(fileRef, file);
    
    // Get the downloadable URL for the uploaded file
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file to Firebase:", error);
    throw error;
  }
};