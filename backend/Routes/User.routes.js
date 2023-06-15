const express = require("express");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/User.Model");

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User Already Exist Cannot Register" });
    }

    const hashed = await bcrypt.hash(password, 5);

    const User = new UserModel({
      name,
      email,
      password: hashed,
    });

    await User.save();

    return res
      .status(200)
      .json({ message: "The new user has been registered" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.msg });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User Not Found Please Register" });
    }
    bcrypt.compare(password, user.password, (err , result) => {
      if (result) {
        const token = jwt.sign({ course: "backend" }, "masai");
        return res.status(200).json({ message: "Login Successful", token });
      } else {
        return res.status(400).json({ message: "Wrong Crediential" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something Went Wrong" });
  }
});

userRouter.post("/logout", async (req, res) => {});

module.exports = {
  userRouter,
};

const data = [
  {
    image: [
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64228601/1/?bust=1683713877&width=1080",
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64228601/2/?bust=1683713811&width=1080",
    ],
    name: "Mamba",
    gender: "Male",
    age: "Adult",
    breed: "Affenpinscher",
    size: "Medium",
    color: "Black",
    type: "Dog",
    price: 20000,
    location: "Delhi",
  },
  {
    image: [
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48100346/1/?bust=1591093605&width=1080",
    ],
    name: "Mocha",
    gender: "Female",
    age: "Young",
    breed: "Affenpinscher",
    size: "Small",
    color: "Black",
    type: "Dog",
    price: 20000,
    location: "Delhi",
  },
  {
    image: [
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64228601/1/?bust=1683713877&width=1080",
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64228601/2/?bust=1683713811&width=1080",
    ],
    name: "Mamba",
    gender: "Male",
    age: "Adult",
    breed: "Affenpinscher",
    size: "Medium",
    color: "Black",
    type: "Dog",
    price: 20000,
    location: "Delhi",
  },
];
