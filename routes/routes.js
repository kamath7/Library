const router = require("express").Router();
const Library = require("../models/Schema");

//get all
router.get("/books/all", async (req, res) => {
  try {
    const allBooks = await Library.find();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(404).json({ error });
  }
});
//get all books only
router.get("/books/all", async (req, res) => {
  try {
    const allBooks = await Library.find();
    const books = await allBooks.map((book) => book.booksWritten);
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ error });
  }
});

//get all books by author
router.get("/books/author/:authorName", async (req, res) => {
    const authorName = req.params.authorName;

    try {
        const allBooks = await Library.find();
       const books = await allBooks.filter((book)=> book.author === authorName);
        res.status(200).json(books);
      } catch (error) {
        res.status(404).json({ error });
      }
});

//add a new author
router.post("/books/add", async (req, res) => {});

//update an entry

router.patch("/books/:id", async (req, res) => {});
