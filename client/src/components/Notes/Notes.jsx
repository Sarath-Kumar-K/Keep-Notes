import React, { useState, useEffect } from "react";
import "./notes.css";
import EditModal from "../EditModal/EditModal.jsx";
import NoteForm from "../NoteForm/NoteForm.jsx";
import NoteItem from "../NoteItem/NoteItem.jsx";
import useNotes from "../../hooks/useNotes.js";

const Notes = () => {
  const { notes, totalNotes, page, setPage, fetchNotes, deleteNote } = useNotes();
  const [editModal, setEditModal] = useState(false);
  const [editNote, setEditNote] = useState({});
  const totalPages = Math.ceil(totalNotes / 6);
  const [triggerRender, setTriggerRender] = useState(0);
  useEffect(() => {
    fetchNotes();
  }, [page, triggerRender]);

  const handleEditNote = (note) => {
    setEditNote(note);
    setEditModal(true);
  };
  const handlePageClick = (newPage) => {
    setPage(newPage);
  };

  const handleDeleteNote = async (noteId) => {
    try{
      await deleteNote(noteId);
      setTriggerRender(prev=>prev + 1);
    }catch(error){
      console.log(error.message);
    }
  };
  return (
    <div className="main">
      {/* form */}
      <NoteForm triggerRender={setTriggerRender}/>
      {/* notes */}
      <div className="notes">
        {notes.slice(0, 6).map((note) => (
          <NoteItem key={note._id} note={note} editNote={handleEditNote} openModal={setEditModal} deleteHandle={handleDeleteNote}/>
        ))}
      </div>
      {/* pagination */}
      {totalNotes > 6 && (
        <div className="pagination">
          <button onClick={()=>handlePageClick(page-1)} style={{visibility:page<2?"hidden":"visible"}}>&laquo;</button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={page === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={()=>handlePageClick(page+1)} style={{visibility:page>=totalPages?"hidden":"visible"}}>&raquo;</button>
        </div>
      )}
      {editModal && <EditModal note={editNote} onClose={setEditModal} triggerRender={setTriggerRender} deleteHandle={handleDeleteNote}/>}
    </div>
  );
};

export default Notes;
