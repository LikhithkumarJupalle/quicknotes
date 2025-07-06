import { Request, Response } from "express";
import Note from "../models/Note";

export const createNote = async (req: Request, res: Response) => {
  const { title } = req.body;
  const userId = (req as any).user.id;

  const note = await Note.create({ title, userId });
  res.json(note);
};

export const getNotes = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const notes = await Note.find({ userId });
  res.json(notes);
};

export const deleteNote = async (req: Request, res: Response) => {
  const noteId = req.params.id;
  await Note.findByIdAndDelete(noteId);
  res.json({ message: "Note deleted" });
};
