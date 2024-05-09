const express = require("express");
const router = express.Router();
const {
  getItems,
  createItem,
  putItem,
  deleteItems,
  getItem,
} = require("../controllers/itemController");

router
  .route("/")
  .get(getItems)
  .post(createItem)
  .put(putItem)
  .delete(deleteItems);

router.route("/:itemId").get(getItem);

module.exports = router;
