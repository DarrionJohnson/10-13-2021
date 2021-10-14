import once from "./connections/once.js";
import productsData from "./data.js";

// Created an (Anonymous IIFE)--- Immediately Invoke Function Expression --- TO USE ASYNCO AWAIT, you have to use and IIFE or a
(async () => {
  const conn = await once.connect();
  await conn.db("products").collection("products").deleteMany({});
  await conn.db("products").collection("products").insertMany(productsData);
  conn.close();
})();

// once
//   .connect()
//   .then((connection) =>
//     connection.db("products").collection("products").insertMany(productsData)
//   )
//   .then(() => {
//     once.close();
//   });
