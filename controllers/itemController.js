const Item = require("../models/Item");

// for '/item' endpoints

const getItems = async (req, res, next) => {
  if (Object.keys(req.query).length) {
    const { itemName, price, quantity } = req.query;
    const filter = [];
    if (itemName) filter.push(itemName);
    if (price) filter.push(price);
    if (quantity) filter.push(quantity);

    for (const query of filter) {
      console.log(`Searching item by ${query}`);
    }
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

module.exports = {
  getItems,
  createItem,
  deleteItems,
  getItem,
  updateItem,
  deleteItem,
};
