import React from "react";
import "./noteItem.css";

const NoteItem = ({ note, editNote, deleteHandle }) => {
  const date = new Date(note.updatedAt);
  const options = {month: 'short',day:'numeric'};
  const formatedDate = date.toLocaleDateString('en-us',options);
  const handleNoteClick = (note) => {
    editNote(note);
  };

  return (
    <div className="note" key={note._id}>
      <div className="display" onClick={() => handleNoteClick(note)}>
        <div className="title-date">
        <div className="title">{note.title}</div>
        <div className="edit-date">{formatedDate}</div>
        </div>
        
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
        <div  onClick={() => handleNoteClick(note)}>
          <i className="fa-regular fa-pen-to-square"></i>
        </div>
        <div onClick={()=>deleteHandle(note._id)}>
          <i className="fa-regular fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
