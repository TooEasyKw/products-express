const express = require("express");
const {
  getAllProducts,
  getOneProduct,
  deleteProduct,
  addProduct,
} = require("./controller");
const router = express.Router();
router.use(express.json());

router.get("/", getAllProducts); // Working..

router.get("/:id", getOneProduct); // Working..

router.delete("/:id", deleteProduct); // Working..

router.post("/", addProduct); // Working..

module.exports = router;
