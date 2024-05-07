// for '/item' endpoints

const getItems = (req, res, next) => {
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

module.exports = {
  getItems,
  createItem,
  putItem,
  deleteItems,
};
