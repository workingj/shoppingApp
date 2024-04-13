import express from "express";
import timeLogger from "./middleware/timeLogger.js";
import './db/mongoDBServ.js'
import entryRouter from "./routes/routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import cors from 'cors';

const PORT = 3000;
const app = express();

// CONFIG
app.use(cors({ origin: process.env.ORIGIN_URL}));
app.use(express.json());

// ROUTS
app.use('/',entryRouter);

// ERROR HANDLER
app.use(errorHandler);

// LISTENER
app.listen(PORT, (err) => {
  if (err) return console.error(err);
  console.log(`Server running: http://localhost:${PORT}`);
});
