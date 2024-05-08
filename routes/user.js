const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  putUser,
  deleteUsers,
} = require("../controllers/userController");

router
  .route("/")
  .get(getUsers)
  .post(createUser)
  .put(putUser)
  .delete(deleteUsers);

module.exports = router;
