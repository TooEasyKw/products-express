const express = require("express");
const router = require("./apis/products/router");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/apis/products", router);

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
