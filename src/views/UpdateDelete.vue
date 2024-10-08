<template>
    <div>
      <h1>Update/Delete Data from Firestore</h1>
      <div>
        <input type='text' v-model="documentId" placeholder="Document ID" />
        <input type= 'text' v-model="updatedField" placeholder="Book name" />
      </div>
      <div>
        <button @click="updateDocument">Update Document</button>
        <button @click="deleteDocument">Delete Document</button>
      </div>
      <BookList/>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { doc, updateDoc, deleteDoc } from "firebase/firestore";
  import db from '../firebase/init.js'
  import BookList from "@/components/BookList.vue";
  export default{
    setup(){
        const documentId = ref(""); 
        const updatedField = ref("");
  
  const updateDocument = async () => {
    try {
      const docRef = doc(db, "books", documentId.value);
      await updateDoc(docRef, {
        name: updatedField.value,
      });
      console.log("Document updated successfully!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  
  // Function to delete the document from Firestore
  const deleteDocument = async () => {
    try {
      const docRef = doc(db, "books", documentId.value);
      await deleteDoc(docRef);
      console.log("Document deleted successfully!");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
    return {
        documentId,
        updatedField,
        updateDocument,
        deleteDocument
    }
    },
    components: {
        BookList
    }
    
  }
  
  </script>
  