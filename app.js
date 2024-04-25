import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

/* app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST,PUT, DELETE, PATH,OPTIONS"
  );
  next();
}); */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/MemoJot/api/v1", notesRoutes);

export default app;
