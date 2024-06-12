const Item = require("../models/Item");
const path = require("path");

// for '/item' endpoints

const getItems = async (req, res, next) => {
  //query parameter
  const filter = {};
  const options = {};
  if (Object.keys(req.query).length) {
    const { itemName, price, quantity, itemDescription, sortByPrice, limit } =
      req.query;

    if (itemName) filter.itemName = true;
    if (price) filter.price = true;
    if (quantity) filter.quantity = true;
    if (itemDescription) filter.itemDescription = true;

    if (limit) options.limit = limit;
    if (sortByPrice)
      options.sort = {
        price: sortByPrice,
      };
  }

  try {
    const itemsPayload = await Item.find();

    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(itemsPayload);
  } catch (err) {
    next(err);
  }
};

const createItem = async (req, res, next) => {
  try {
    const payloadCreateItem = await Item.create(req.body);
    res
      .status(201)
      .setHeader("Content-Type", "application/json")
      .json(payloadCreateItem);
  } catch (err) {
    next(err);
  }
};

const deleteItems = async (req, res, next) => {
  try {
    const deletedItems = await Item.deleteMany();
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(deletedItems);
  } catch (err) {
    next(err);
  }
};

// For '/items/:itemId'

const getItem = async (req, res, next) => {
  try {
    const getItemPayloadById = await Item.findById(req.params.itemId);
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(getItemPayloadById);
  } catch (err) {
    next(err);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const updateItem = await Item.findByIdAndUpdate(
      req.params.itemId,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(updateItem);
  } catch (err) {
    next(err);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const deleteItem = await Item.findByIdAndDelete(req.params.itemId);
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(deleteItem);
  } catch (err) {
    next(err);
  }
};

// Ratings for /:itemId/ratings
const getItemRatings = async (req, res, next) => {
  try {
    const getRating = await Item.findById(req.params.itemId);
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(getRating.ratings);
  } catch (err) {
    next(err);
  }
};

const updateRating = async (req, res, next) => {
  try {
    const updateRating = await Item.findById(req.params.itemId);

    updateRating.ratings.push(req.body);
    await updateRating.save();

    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(updateRating.ratings);
  } catch (err) {
    next(err);
  }
};

const deleteRating = async (req, res, next) => {
  try {
    const deleteItemRating = await Item.findById(req.params.itemId);
    deleteItemRating.ratings = [];
    await deleteItemRating.save();
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json({ msg: `Deleted all ratings for item id of ${req.params.itemId}` });
  } catch (err) {
    next(err);
  }
};

const postItemImage = async (req, res, next) => {
  try {
    const err = { message: `Error uploading image` };
    if (!req.files) next(err);

    const file = req.files.file;

    if (!file.mimetype.startsWith("image")) next(err);
    if (file.size > process.env.MAX_FILE_SIZE) next(err);

    file.name = `photo_${req.params.itemId}${path.parse(file.name).ext}`;

    const filePath = process.env.FILE_UPLOAD_PATH + file.name;
    console.log(req.params.itemId);
    file.mv(filePath, async (err) => {
      await Item.findById(req.params.itemId, {
        image: file.name,
      });
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json({ message: "Image uploaded!" });
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getItems,
  createItem,
  deleteItems,
  getItem,
  updateItem,
  deleteItem,
  getItemRatings,
  updateRating,
  deleteRating,
  postItemImage,
};
