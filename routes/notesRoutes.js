import express from "express";
import { addNote } from "../controllers/notesControllers.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.post("/addNote", upload.any(), addNote);


export default router;
