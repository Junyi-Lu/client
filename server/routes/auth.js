const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models").userModel;
const jwt = require("jsonwebtoken");

router.use((req, res, next) => {
  console.log("A request is coming in to auth.js");
  next();
});

router.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "Test API is working.",
  };
  return res.json(msgObj);
});

router.post("/register", async (req, res) => {
  console.log("Register!!!");
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send("Email already exists.");
  }

  const newUser = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).send({
      msg: "success",
      savedObject: savedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send("User not saved.");
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send("User not found.");
    } else {
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (error) {
          return res.status(400).send(error);
        }
        if (!isMatch) {
          return res.status(401).send("Password does not match.");
        }
        const tokenObject = { _id: user._id, email: user.email };
        const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
        res.send({ success: true, token: "Bearer " + token, user });
      });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
