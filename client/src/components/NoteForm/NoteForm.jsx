import React, { useState } from "react";
import './noteForm.css';
import useNotes from '../../hooks/useNotes';

const NoteForm = () => {
  const {addNote} = useNotes();
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({});
  const [pinned, setPinned] = useState(false);

  console.log(formData);

  const handlePinnedState = (value) => {
    setPinned(!value);
    setFormData({ ...formData, pinned: !value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle Submit called");
    await addNote(formData);
    setIsExpanded(false);
    setFormData({});
  };

  return (
    <div
      className={`search ${isExpanded ? "expanded" : ""}`}
      onClick={() => setIsExpanded(true)}
    >
      <input
        type="text"
        className=".input"
        placeholder="Take a note..."
        readOnly
        style={{ display: isExpanded ? "none" : "" }}
      />
      {isExpanded && (
        <form onSubmit={handleSubmit} className="expandedInput">
          <div className="editor">
            <input
              type="text"
              placeholder="Title"
              id="title"
              // value={title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <textarea
              placeholder="Take a note..."
              id="content"
              // value={content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              autoFocus
            />
          </div>
          <div className="edit-options">
            <div className="edit-icons">
              <div onClick={() => handlePinnedState(pinned)}>
                {pinned ? (
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
            </div>
            <div className="edit-label">
              <div
                className="cancel"
                onClick={() => setIsExpanded(false)}
              >
                cancel
              </div>
              <div className="save">
                <input type="submit" value="save" />
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default NoteForm;
