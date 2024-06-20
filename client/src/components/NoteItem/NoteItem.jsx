import React from "react";
import "./noteItem.css";
import useNotes from "../../hooks/useNotes";

const NoteItem = ({ note, updateNote, deleteHandle, triggerRender }) => {
  const {editNote} = useNotes();
  const date = new Date(note.updatedAt);
  const options = {month: 'short',day:'numeric'};
  const formatedDate = date.toLocaleDateString('en-us',options);
  const handleNoteClick = (note) => {
    updateNote(note);
  };

  const handlePinned = async(Note)=>{
    try{
      await editNote(Note._id,{...Note,pinned:!Note.pinned});
      triggerRender(prev=>prev+1);
    }catch(error){
      console.log(error.message);
    }
  };
  return (
    <div className="note" key={note._id}>
      <div className="display" onClick={() => handleNoteClick(note)}>
        <div className="title-date">
        <div className="title"><p>{note.title}</p></div>
        <div className="edit-date"><p>{formatedDate}</p></div>
        </div>
        
        <div className="content"><p>{note.content}</p></div>
      </div>
      <div className="edit-options">
        {note.pinned ? (
          <div onClick={()=>handlePinned(note)}>
            <i
              className="bi bi-pin-fill"
              style={{ color: "#e8aa38", visibility: "visible" }}
            ></i>
          </div>
        ) : (
          <div onClick={()=>handlePinned(note)}>
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
