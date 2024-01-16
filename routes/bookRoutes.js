const express = require("express");

const { userModel } = require("../models/usermodel");
const { bookModel } = require("../models/bookmodel");
const {
  getAllBooks,
  getSpecificBook,
  addNewBook,
  updateBook,
} = require("../controllers/bookController");
const router = express.Router();

// to get all te books.
router.get("/", getAllBooks);

// to get the specific book using id.
router.get("/:id", getSpecificBook);

// to get the issued books.

// to add a new back.
router.post("/", addNewBook);

// to update a specific book.
router.put("/update/:id", updateBook);

module.exports = router;
