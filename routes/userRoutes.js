const express = require("express");

const userModel = require("../models/usermodel");
const bookModel = require("../models/bookmodel");

const {
  getAllUsers,
  getSpecificUser,
  addNewUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();
router.use(express.json());

// to get all the users .
router.get("/", getAllUsers);

//to get the specific user using ID
router.get("/:id", getSpecificUser);

// to add a new user.
router.post("/", addNewUser);

// to update a user
router.put("/update/:id", updateUser);

module.exports = router;
