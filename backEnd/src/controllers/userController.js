const User = require("../models/userController");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_STR, {
    expiresIn: process.env.LOGIN_EXPIRES,
  });
};

// registration

const registration = async (req, res) => {
  const { name, email, university, subjects, password } = req.body;

  if (!name || !email || !university || !subjects || !password) {
    res.status(400).json({
      status: "error",
      message: "validation error",
    });
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400).json({
      status: "error",
      message: "user already registred",
    });
  }

  const newUser = new User({ name, email, university, subjects, password });
  try {
    await newUser.save();
    res.json("Registration successfull");
  } catch (error) {
    console.log(error);
  }
};

//login

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password || email === "" || password === "") {
    res.status(400).json({
      status: "error",
      message: "Validation error",
    });
  }
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

//get users

const users = async (req, res) => {
  const users = await User.find().select('-password');;
  if (!users) {
    res.status(404).json({
      status: "error",
      message: "Users not found",
    });
  }
  res.status(200).json({
    status: "success",
    message: "Users successfully fetched",
    data:users
  });
};

module.exports = {
  registration,
  login,
  users
};
