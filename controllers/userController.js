const userModel = require("../models/usermodel");
const bookModel = require("../models/bookmodel");

exports.getAllUsers = async (req, res) => {
  const user = await userModel.find();
  if (user.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No user Found",
    });
  }
  return res.status(200).json({
    success: true,
    data: user,
  });
};

exports.getSpecificUser = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  if (user.$isEmpty) {
    return res.status(404).json({
      success: false,
      message: "No user Found",
    });
  }
  return res.status(200).json({
    success: true,
    data: user,
  });
};

exports.addNewUser = async (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found",
    });
  }
  await userModel.create(data);
  const newUser = await userModel.find();
  return res.status(200).json({
    success: true,
    message: "New Book created",
    data: newUser,
  });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const updatedUser = await userModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updatedUser) {
    return res.status(404).json({
      success: false,
      message: "Book Not found",
    });
  }
  return res.status(200).json({
    success: true,
    data: updatedUser,
  });
};
