import { MongoClient } from "mongodb";
import config from "../../config.js";

const client = new MongoClient(config.db);

export default {
  connect() {
    return client.connect();
  },
  close() {
    client.close();
  },
};
