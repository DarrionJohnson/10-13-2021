import once from "./connections/once.js";
import productsData from "./data.js";

once
  .connect()
  .then((connections) =>
    connections.db("products").collection("products").insertMany(productsData)
  )
  .then(() => {
    once.close();
  });
