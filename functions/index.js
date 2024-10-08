const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();


exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;
      res.status(200).send({ count });
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});


exports.addBook = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { isbn, name } = req.body; 
      const booksCollection = admin.firestore().collection("books");

      const capitalizedBookName = name.toUpperCase();

      await booksCollection.add({
        isbn: isbn,
        name: capitalizedBookName,
      });

      res.status(201).send("Book added successfully!");
    } catch (error) {
      console.error("Error adding book:", error.message);
      res.status(500).send("Error adding book");
    }
  });
});

exports.getAllBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const books = snapshot.docs.map(doc => doc.data().name);
      res.status(200).send({ books });
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});