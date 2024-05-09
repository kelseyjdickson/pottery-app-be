const express = require("express");
const router = express.Router();
const {
  getItems,
  createItem,
  updateItem,
  deleteItems,
  getItem,
  deleteItem,
} = require("../controllers/itemController");

router.route("/").get(getItems).post(createItem).delete(deleteItems);

router.route("/:itemId").get(getItem).post(updateItem).delete(deleteItem);

module.exports = router;
