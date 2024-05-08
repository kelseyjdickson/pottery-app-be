// for '/sser' endpoints

const getUsers = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "You hit me, show me all the Users" });
};

const createUser = (req, res, next) => {
  res
    .status(201)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Created User with name ${req.body.UserName}` });
};

const putUser = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "You hit me" });
};

const deleteUsers = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "Deleting Users" });
};

module.exports = {
  getUsers,
  createUser,
  putUser,
  deleteUsers,
};
