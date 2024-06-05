const express = require("express");
const app = express();
const PORT = 8000;
const products = require("./data");

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
