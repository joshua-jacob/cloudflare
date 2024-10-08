<template>
  <div>
    <h1>Books Data</h1>
    <ul>
      <li v-for="book in books" :key="book.id">{{ book.name }} - ISBN: {{ book.isbn }}</li>
    </ul>
    <button @click="fetchBooksByWhere">Fetch Books by ISBN > 1000</button>
    <button @click="fetchBooksByOrder">Fetch Books Ordered by ISBN</button>
    <button @click="fetchBooksWithLimit">Fetch Limited Books (5)</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

export default {
  setup() {
    const books = ref([]);

    // Fetch books using where condition (ISBN > 1000)
    const fetchBooksByWhere = async () => {
      try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
        console.log("Books fetched using 'where' condition");
      } catch (error) {
        console.error('Error fetching books by where:', error);
      }
    };

    // Fetch books ordered by ISBN
    const fetchBooksByOrder = async () => {
      try {
        const q = query(collection(db, 'books'), orderBy('isbn', 'asc'));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
        console.log("Books fetched using 'orderBy' condition");
      } catch (error) {
        console.error('Error fetching books by order:', error);
      }
    };

    // Fetch books with a limit (5 books only)
    const fetchBooksWithLimit = async () => {
      try {
        const q = query(collection(db, 'books'), limit(5));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
        console.log("Books fetched with a limit of 5");
      } catch (error) {
        console.error('Error fetching books with limit:', error);
      }
    };

    return { books, fetchBooksByWhere, fetchBooksByOrder, fetchBooksWithLimit };
  },
};
</script>
