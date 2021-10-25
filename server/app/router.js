// Main job is to redirect the data sent to it, and determine where it needs to go.

import Router from "express";
import config from "./config.js";
import client from "./db/connections/client.js";

const router = new Router();
const {
  db: { name, collectionName: collection },
} = config;

router.get("/", (_, res) => {
  res.send("Hello From API router!");
});
router.get("/products", async (_, res) => {
  const products = await client.db(name).collection(collection).find({});
  res.json(products);
});

export default router;
