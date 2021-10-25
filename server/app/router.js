// Main job is to redirect the data sent to it, and determine where it needs to go.

import Router from "express";
import { ObjectId } from "mongodb";
import config from "./config.js";
import client from "./db/connections/client.js";

const collection = client
  .db(config.db.name)
  .collection(config.db.collectionName);
const router = new Router();

// localhost:3000/api
router.get("/", (_, res) => {
  res.send("Hello From API router!");
});

// localhost:3000/api/products
// REMEMBER: You need a toArray for it to format correctly.
router.get("/products", async (_, res) => {
  console.log(client.db(name).collection(collection));
  const products = await collection.find({}).toArray();
  res.json(products);
});

// : (colon) makes this code dynamic, or changeable.
router.get("/products/:id", async (req, res) => {
  const product = await collection.findOne({ _id: ObjectId(req.params.id) });
  res.json(product);
});

// How to ADD and DELETE a product.
router.post("/products", async (req, res) => {
  const createProduct = await collection.insertOne(req.body);
  res.json(createProduct);
});

router.delete("/products", async (req, res) => {
  const deleteProduct = await collection.deleteOne({
    _id: ObjectId(req.body.id),
  });
  res.json(deleteProduct);
});

export default router;
