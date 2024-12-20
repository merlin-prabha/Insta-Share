const express = require("express");
const {
  addNewUser,
  getAllUsers,
  loginUser,
  deleteuserById,
  getUserById,
  verifyUser,
  updateUserById,
} = require("../controller/userController");
const { authMiddleware } = require("../middleware/authMiddleware");
const upload = require("../middleware/multer");
const router = express.Router();

router.post("/add-user", addNewUser);
router.post("/verifyUser", verifyUser);

router.post("/login", loginUser);

// router.use(authMiddleware);

router.route("/user/:id").delete(deleteuserById).get(getUserById)
router.route("/users").get(getAllUsers);
router.put("/user/:id", upload, updateUserById)

module.exports = router;
