import React, { useState, useEffect } from "react";
import "./notes.css";
import EditModal from "../EditModal/EditModal.jsx";
import NoteForm from "../NoteForm/NoteForm.jsx";
import NoteItem from "../NoteItem/NoteItem.jsx";
import useNotes from "../../hooks/useNotes.js";

const Notes = () => {
  const { notes, totalNotes, page, setPage, fetchNotes } = useNotes();
  const [editModal, setEditModal] = useState(false);
  const [editNote, setEditNote] = useState({});
  const totalPages = Math.ceil(totalNotes / 6);
  useEffect(() => {
    fetchNotes();
  }, [notes]);

  const handleEditNote = (note) => {
    setEditNote(note);
    setEditModal(true);
  };
  const handlePageClick = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className="main">
      {/* form */}
      <NoteForm />
      {/* notes */}
      <div className="notes">
        {notes.slice(0, 6).map((note) => (
          <NoteItem key={note._id} note={note} editNote={handleEditNote} />
        ))}
      </div>
      {/* pagination */}
      {totalNotes > 6 && (
        <div className="pagination">
          <button>&laquo;</button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={page === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button>&raquo;</button>
        </div>
      )}
      {editModal && <EditModal note={editNote} onClose={setEditModal} />}
    </div>
  );
};

export default Notes;
