let products = require("../../data");

const getAllProducts = (req, res) => {
  return res.json(products);
};

const getOneProduct = (req, res) => {
  const id = req.params.id;
  const product = products.find((pro) => {
    return pro.id == id;
  });

  if (product) {
    return res.json(product);
  } else {
    return res.json("There is no product with this ID");
  }
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  const product = products.filter((pro) => {
    return pro.id != id;
  });
  products = product;
  if (product) {
    return res.json(product);
  } else {
    return res.json("There is no product with this ID");
  }
};

const addProduct = (req, res) => {
  products.push(req.body);
  return res.json(products);
};

module.exports = { getAllProducts, getOneProduct, deleteProduct, addProduct };
