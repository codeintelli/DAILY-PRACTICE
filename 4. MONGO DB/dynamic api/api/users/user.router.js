const router = require("express").Router();
const { checkToken } = require("../../auth/token_validator");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUser,
  deleteUser,
} = require("./user.controller");

router.post("/", createUser);
router.post("/login", login);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserByUserId);
router.patch("/", checkToken, updateUser);
router.delete("/", checkToken, deleteUser);

module.exports = router;
