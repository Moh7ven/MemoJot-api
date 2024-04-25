import express from "express";
import {
  addNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesControllers.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.post("/addNote", upload.any(), addNote);

router.get("/getAllNotes", upload.any(), getAllNotes);

router.get("/getNoteById/:id", upload.any(), getNoteById);

router.put("/updateNote/:id", upload.any(), updateNote);

export default router;
