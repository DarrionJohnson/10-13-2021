// Provides config for the app in conjunction with dotenv
// All changes made to anything data, must be done here to help keep track of all trade.


// Config is the only place accesses 'dotenv'
import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  db:
    process.env.DB_CLIENT_URL ||
    // Use localhost if no DB_CLIENT_URL is provided
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000",
    port: process.env.PORT || 3000,
};
