import React from "react";
import "../styles/Home.css";

interface NoteItemProps {
  note: {
    _id: string;
    title: string;
  };
  onDelete: (id: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete }) => {
  return (
    <div className="note-item">
      <span>{note.title}</span>
      <button className="delete-button" onClick={() => onDelete(note._id)}>
        Delete
      </button>
    </div>
  );
};

export default NoteItem;

