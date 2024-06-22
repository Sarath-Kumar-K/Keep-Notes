import React, { useState, useEffect } from "react";
import "./notes.css";
import EditModal from "../EditModal/EditModal.jsx";
import NoteForm from "../NoteForm/NoteForm.jsx";
import NoteItem from "../NoteItem/NoteItem.jsx";
import useNotes from "../../hooks/useNotes.js";
import { useLocation } from "react-router-dom";
import Errorpopup from "../Errorpopup/Errorpopup.jsx";
import Successpopup from "../Successpopup/Successpopup.jsx";

const Notes = ({ tab }) => {
  const {
    notes,
    totalNotes,
    page,
    setPage,
    fetchNotes,
    deleteNote,
    searchNote,
  } = useNotes();
  const [editModal, setEditModal] = useState(false);
  const [editNote, setEditNote] = useState({});
  const totalPages = Math.ceil(totalNotes / 6);
  const [triggerRender, setTriggerRender] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const term = params.get("searchTerm");
    setSearchTerm(term || "");
  }, [location.search]);
  useEffect(() => {
    if (tab === "notes") {
      fetchNotes();
    } else if (tab === "search") {
      if (searchTerm) {
        searchNote(searchTerm);
      }
    }
  }, [page, triggerRender, searchTerm]);

  const handleEditNote = (note) => {
    setEditNote(note);
    setEditModal(true);
  };
  const handlePageClick = (newPage) => {
    setPage(newPage);
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await deleteNote(noteId);
      setSuccessMessage("Note Deleted Successfully");
      setErrorMessage(null);
      setTriggerRender((prev) => prev + 1);
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage(null);
    }
  };
  return (
    <div className="main">
      {/* form */}
      <div
        className="note-form"
        style={{
          display:
            tab === "search" || tab === "archive" || tab === "bin"
              ? "none"
              : "block",
        }}
      >
        <NoteForm triggerRender={setTriggerRender} />
      </div>
      {/* notes */}
      <div className="notes">
        {notes.slice(0, 6).map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            updateNote={handleEditNote}
            openModal={setEditModal}
            deleteHandle={handleDeleteNote}
            triggerRender={setTriggerRender}
          />
        ))}
      </div>
      {/* pagination */}
      {totalNotes > 6 && (
        <div className="pagination">
          <button
            onClick={() => handlePageClick(page - 1)}
            style={{ visibility: page < 2 ? "hidden" : "visible" }}
          >
            &laquo;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={page === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageClick(page + 1)}
            style={{ visibility: page >= totalPages ? "hidden" : "visible" }}
          >
            &raquo;
          </button>
        </div>
      )}
      {editModal && (
        <EditModal
          note={editNote}
          onClose={setEditModal}
          triggerRender={setTriggerRender}
          deleteHandle={handleDeleteNote}
        />
      )}
      {errorMessage && (
        <Errorpopup
          error={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
      {successMessage && (
        <Successpopup
          message={successMessage}
          onClose={() => setSuccessMessage(null)}
        />
      )}
    </div>
  );
};

export default Notes;
