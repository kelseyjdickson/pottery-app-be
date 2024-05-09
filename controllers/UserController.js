const User = require("../models/User");

// for '/user' endpoints
const getUsers = async (req, res, next) => {
  if (Object.keys(req.query).length) {
    const username = req.query.username;

    const filter = [];
    if (username) filter.push(username);

    for (const query of filter) {
      console.log(`Searching user by ${query}`);
    }
  }

  try {
    const user = await User.find();
    res.status(200).setHeader("Content-Type", "application/json").json(user);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const createUser = await UserSchema.create(req.body);
    res
      .status(201)
      .setHeader("Content-Type", "application/json")
      .json(createUser);
  } catch (err) {
    next(err);
  }
};

const deleteUsers = async (req, res, next) => {
  const deletedUsers = await User.deleteMany();
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json(deletedUsers);
  try {
  } catch (err) {
    next(err);
  }
};

// For 'user/:userId/'

const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.userId);
  try {
    res.status(200).setHeader("Content-Type", "appplication/json").json(user);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(updateUser);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.userId);
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(deleteUser);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  createUser,
  deleteUsers,
  getUser,
  updateUser,
  deleteUser,
};
