const express = require("express");
const app = express();
const PORT = 8000;
let products = require("./data");

app.use(express.json());

app.get("/api/products", (req, res) => {
  return res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((pro) => {
    return pro.id == id;
  });

  if (product) {
    return res.json(product);
  } else {
    return res.json("There is no product with this ID");
  }
});

app.delete("/api/products/:id", (req, res) => {
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
});

app.post("/api/products", (req, res) => {
  products.push(req.body);
  return res.json(products);
});

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
