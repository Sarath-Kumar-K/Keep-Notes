import React, { useEffect } from "react";
import './noteItem.css';

const NoteItem = ({note}) => {
  
  const handleNoteClick = (note) => {
    setCurrentNote(note);
  };
  

  return (
    <div className="note" key={note._id} onClick={() => handleNoteClick(note)}>
      <div className="display">
        <div>{note.title}</div>
        <div>{note.content}</div>
      </div>
      <div className="edit-options">
        {note.pinned ? (
          <div>
            <i
              className="bi bi-pin-fill"
              style={{ color: "#e8aa38", visibility: "visible" }}
            ></i>
          </div>
        ) : (
          <div>
            <i className="bi bi-pin"></i>
          </div>
        )}
        <div>
          <i className="fa-regular fa-bell"></i>
        </div>
        <div>
          <i className="bi bi-box-arrow-down"></i>
        </div>
        <div>
          <i className="fa-regular fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
