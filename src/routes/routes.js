const router = require("express").Router();
const Library = require("../models/Schema");

//get all
router.get("/all", async (req, res) => {
  try {
    const allBooks = await Library.find();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(404).json({ error });
  }
});
//get all books only
router.get("/book", async (req, res) => {
  try {
    const allBooks = await Library.find();
    const books = await allBooks.map((book) => book.booksWritten).flat();
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ error });
  }
});

//get all books by author
router.get("/author/:authorName", async (req, res) => {
  const authorName = req.params.authorName;

  try {
    const allBooks = await Library.find();
    const books = await allBooks.filter((book) => book.author === authorName);
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ error });
  }
});

//add a new author
router.post("/add", async (req, res) => {
  const newEntry = new Library({
    author: req.body.author,
    nationality: req.body.nationality,
    booksWritten: req.body.booksWritten,
  });
  try {
    const newEntry1 = await newEntry.save();
    res.status(201).json(newEntry1);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
});

//update an entry

router.patch("/books/:id", async (req, res) => {});

module.exports = router;
