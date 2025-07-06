import React, { useEffect, useState } from "react";
import { createNote, deleteNote, getNotes } from "../services/api";
import "../styles/Home.css";

interface Note {
  _id: string;
  title: string;
}

interface HomeProps {
  token: string;
  name: string;
}

const Home: React.FC<HomeProps> = ({ token, name }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");

  const fetchNotes = async () => {
    try {
      const res = await getNotes(token);
      setNotes(res.data); // ✅ show all notes
    } catch (err) {
      console.error("Fetch notes error:", err);
    }
  };

  const handleAddNote = async () => {
    if (!newNote.trim()) return;

    try {
      await createNote(newNote, token); // ✅ save note
      setNewNote(""); // ✅ clear input
      fetchNotes();   // ✅ refresh list
    } catch (err) {
      console.error("Add note error:", err);
    }
  };

  const handleDeleteNote = async (id: string) => {
    try {
      await deleteNote(id, token);
      fetchNotes(); // ✅ update after delete
    } catch (err) {
      console.error("Delete note error:", err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="home-container">
      <div className="home-card">
        <div className="header">
          <h2 className="welcome-text">Welcome, {name}!</h2>
          <button
            className="logout-button"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>

        <div className="input-group">
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Enter note"
            className="note-input"
          />
          <button className="add-button" onClick={handleAddNote}>
            Add
          </button>
        </div>

        <div className="notes-list">
          {notes.length === 0 ? (
            <p className="empty-text">No notes yet.</p>
          ) : (
            notes.map((note) => (
              <div key={note._id} className="note-item">
                <span>{note.title}</span>
                <button
                  onClick={() => handleDeleteNote(note._id)}
                  className="delete-button"
                  title="Delete"
                >
                  ❌
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
