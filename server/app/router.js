// Main job is to redirect the data sent to it, and determine where it needs to go.

import Router from "express";
import { ObjectId } from "mongodb";
import config from "./config.js";
import client from "./db/connections/client.js";

const router = new Router();
const {
  db: { name, collectionName: collection },
} = config;

console.log(name, collection);

router.get("/", (_, res) => {
  res.send("Hello From API router!");
});

// REMEMBER: You need a toArray for it to format correctly.
router.get("/products", async (_, res) => {
  console.log(client.db(name).collection(collection));
  const products = await client
    .db(name)
    .collection(collection)
    .find({})
    .toArray();
  res.json(products);
});

// : (colon) makes this code dynamic, or changeable.
router.get("/products/:id", async (req, res) => {
  const product = await client
    .db(name)
    .collection(collection)
    .findOne({ _id: ObjectId(req.params.id) });
  res.json(product);
});

export default router;
