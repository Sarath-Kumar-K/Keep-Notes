import React, { useEffect, useRef, useState } from "react";
import "./editModal.css";

const EditModal = ({ note, onClose}) => {
  const [formData, setFormData] = useState({});
  const modelRef = useRef(null);
  const [pinnedNote, setPinnedNote] = useState(note.pinned);
  const handleClickOutside = (event) => {
    if (modelRef.current && !modelRef.current.contains(event.target)) {
      onClose(false);
    }
  };
  useEffect(() => {
    if (modelRef.current) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!note) {
    return null;
  }
  return (
    <div className="modal-outer">
      <form className="modal" ref={modelRef}>
        <div className="editor">
          <input
            type="text"
            placeholder="Title"
            value={note.title}
            onChange={(e)=> setFormData({...formData,title:e.target.value})}
          />
          <textarea
            placeholder="Content"
            value={note.content}
            onChange={(e)=> setFormData({...formData,content:e.target.value})}
            autoFocus
          />
        </div>
        <div className="edit-options">
          <div className="options">
            <div onClick={()=>setPinnedNote(!pinnedNote)}>
              {pinnedNote ? (
                <i
                  className="bi bi-pin-fill"
                  style={{ color: "#e8aa38", visibility: "visible" }}
                ></i>
              ) : (
                <i className="bi bi-pin"></i>
              )}
            </div>
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
          <div className="edit">
            <div className="close">close</div>
            <div className="update">
              <input type="submit" value="update" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
