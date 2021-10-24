import config from "../config.js";
import once from "./connections/once.js";
import productsData from "./data.js";

// once
//   .connect()
//   .then((connection) =>
//     connection.db("products").collection("products").insertMany(productsData)
//   )
//   .then(() => {
//     once.close();
//   });

// Created an (Anonymous IIFE)--- Immediately Invoke Function Expression --- TO USE ASYNCO AWAIT, you have to use and IIFE or a
// (async () => {
//   const conn = await once.connect();
//   await conn.db("products").collection("products").deleteMany({});
//   await conn.db("products").collection("products").insertMany(productsData);
//   conn.close();
// })();

const {
  db: { name, collectionName: collection },
} = config;

(async () => {
  const conn = await once.connect();
  await conn.db(name).collection(collection).deleteMany({});
  await conn.db(name).collection(collection).insertMany(productsData);
  conn.close();
})();
