<script>
import axios from 'axios';
import BookList from '../components/BookList.vue';

export default {
  data() {
    return {
      isbn: '',
      name: '',
      error: null,
    };
  },

  methods: {
    async addBook() {
      try {
        const isbnNumber = Number(this.isbn);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }


        const response = await axios.post('https://addbook-4sjx7ufuia-uc.a.run.app', {
          isbn: isbnNumber,
          name: this.name
        });


        this.error = null;
        this.isbn = '';
        this.name = ''; 
        alert("Book added successfully!");
      } catch (error) {
        console.error("Error adding book:", error);
        this.error = error; 
      }
    },
  },
  components: {
    BookList,
  },
};
</script>


<template>
    <div>
      <h1>Add Book</h1>
      <form @submit.prevent="addBook">
        <div>
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">Add Book</button>
      </form>
      <div v-if="error">
        <p>Error adding book: {{ error.message }}</p>
      </div>
    </div>
    <BookList />
  </template>
  
