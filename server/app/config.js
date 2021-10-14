// Provides config for the app in conjunction with dotenv
// All changes made to anything data, must be done here to help keep track of all trade.

// Config is the only place accesses 'dotenv'
import dotenv from "dotenv";

dotenv.config();

export default {
  db: process.env.DB_CLIENT_URL,
  port: process.env.PORT || 3000,
};
