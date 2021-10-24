// Loads a reusable Mongo client for the application.
// A connecter to between the database and the Controller. Only job is to transfer the MongoDB client to the controller.

import { MongoClient } from "mongodb";
import config from "./config.js";

const client = new MongoClient(config.db.clientURL);

client
  .connect()
  .then(() => {
    console.info("MongoDB Client 🏃🏾‍♂️");
  })
  .catch((err) => {
    console.error("Error starting MongoDB Client", err.message);

    // Exit process with failure
    process.exit(1);
  });

process.on("SIGINT", () => {
  client.close().then(() => {
    console.info("MongoDB Client disconnected");
    process.exit(0);
  });
});

export default client;
