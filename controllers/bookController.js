const userModel = require("../models/usermodel");
const bookModel = require("../models/bookmodel");
const IssuedBook = require("../DTO/bookDto");
const { all } = require("../routes/userRoutes");

exports.getAllBooks = async (req, res) => {
  const books = await bookModel.find();

  if (books.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Books Found",
    });
  }
  res.status(200).json({
    success: true,
    data: books,
  });
};

exports.getSpecificBook = async (req, res) => {
  const { id } = req.params;
  const book = await bookModel.findById(id);
  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found",
    });
  }
  return res.status(200).json({
    success: true,
    data: book,
    message: "Book Found",
  });
};

exports.addNewBook = async (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(404).json({
      success: false,
      message: " No Data Found",
    });
  }
  await bookModel.create(data);
  const allBooks = await bookModel.find();

  return res.status(200).json({
    success: true,
    data: allBooks,
  });
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const updatedBook = await bookModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updatedBook) {
    return res.status(404).json({
      success: false,
      message: "Book Not found",
    });
  }
  return res.status(200).json({
    success: true,
    data: updatedBook,
  });
};

exports.getAllIssuedBooks = async (req, res) => {
  const users = await UserModel.find({
    issuedBook: { $exists: true },
  }).populate("issuedBook");

  // Data Transfer Object (DTO)

  const issuedBooks = users.map((each) => new IssuedBook(each));

  if (issuedBooks.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Book Have Been Issued Yet..",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Users With The Issued Books...",
    data: issuedBooks,
    hi: console.log(issuedBooks),
  });
};
