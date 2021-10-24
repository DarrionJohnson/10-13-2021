// Main job is to redirect the data sent to it, and determine where it needs to go.

import Router from "express";

const router = new Router();

router.get("/products", (_, res) => {
  // TODO: Get all of the products...
});

// TODO: Add routes here (maybe 🤔 start with a GET test route)

export default router;
