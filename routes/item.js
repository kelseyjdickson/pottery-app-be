const express = require("express");
const router = express.Router();
const {
  getItems,
  createItem,
  updateItem,
  deleteItems,
  getItem,
  deleteItem,
  getItemRatings,
  updateRating,
  deleteRating,
  postItemImage,
} = require("../controllers/itemController");

router.route("/").get(getItems).post(createItem).delete(deleteItems);

router.route("/:itemId").get(getItem).post(updateItem).delete(deleteItem);

router
  .route("/:itemId/ratings")
  .get(getItemRatings)
  .post(updateRating)
  .delete(deleteRating);

router.route("/:itemId/image").post(postItemImage);
module.exports = router;
