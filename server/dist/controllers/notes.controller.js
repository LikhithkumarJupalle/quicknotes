"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.getNotes = exports.createNote = void 0;
const Note_1 = __importDefault(require("../models/Note"));
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.body;
    const userId = req.user.id;
    const note = yield Note_1.default.create({ title, userId });
    res.json(note);
});
exports.createNote = createNote;
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const notes = yield Note_1.default.find({ userId });
    res.json(notes);
});
exports.getNotes = getNotes;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.id;
    yield Note_1.default.findByIdAndDelete(noteId);
    res.json({ message: "Note deleted" });
});
exports.deleteNote = deleteNote;
