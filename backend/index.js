const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const isAuth = require("./middleware/auth");
const app = express();
const port = 5000;

const product = require("./Routes/products");
const user = require("./Routes/users");
const order = require("./Routes/orders");

mongoose
  .connect("mongodb+srv://ricokamau:B482Mm4QRVavP6Yy@cluster0.kdg6xjy.mongodb.net/ECommerce?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(cors());
app.use(isAuth);
app.use("/product", product);
app.use("/users", user);
app.use("/order", order);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
