// for '/item' endpoints

const getItems = (req, res, next) => {
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

  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "You hit me, show me all the items" });
};

const createItem = (req, res, next) => {
  res
    .status(201)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Created Item with name ${req.body.itemName}` });
};

const putItem = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "You hit me" });
};

const deleteItems = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "Deleting items" });
};

// For '/items/:itemId'

const getItem = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Show me the item with Item Id of ${req.params.itemId}` });
};

module.exports = {
  getItems,
  createItem,
  putItem,
  deleteItems,
  getItem,
};
