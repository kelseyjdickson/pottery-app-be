const express = require("express");
const router = express.Router();
const {
  getItems,
  createItem,
  putItem,
  deleteItems,
} = require("../controllers/itemController");

router
  .route("/")
  .get(getItems)
  .post(createItem)
  .put(putItem)
  .delete(deleteItems);

module.exports = router;
