import React, { useEffect, useState } from "react";
import "./editModal.css";
import useNotes from "../../hooks/useNotes";
import AutoResizeTextarea from '../AutoResizeTextarea/AutoResizeTextarea.jsx';

const EditModal = ({ note, onClose, triggerRender, deleteHandle }) => {
  const { editNote } = useNotes();
  const [formData, setFormData] = useState({});
  const [pinnedNote, setPinnedNote] = useState(note.pinned);
  const date = new Date(note.updatedAt);
  const options = { month: "short", day: "numeric" };

  if (!note) {
    return null;
  }
  useEffect(() => {
    if (note) {
      setFormData({
        title: note.title,
        content: note.content,
        pinned: note.pinned,
      });
    }
  }, [note]);

  const handlePinned = (pinnedNote) => {
    setFormData({ ...formData, pinned: !pinnedNote });
    setPinnedNote(!pinnedNote);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editNote(note._id, formData);
      triggerRender((prev) => prev + 1);
      setFormData({});
      onClose(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = (noteId) => {
    deleteHandle(noteId);
    onClose(false);
  };
  return (
    <div className="modal-outer">
      <form onSubmit={handleSubmit} className="modal">
        <div className="editor">
          <div>
            <AutoResizeTextarea
              placeHolder="Title"
              defaultValue={note.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              classname="title"
              AutoFocus={false}
            />
           </div>
          <div>
          <AutoResizeTextarea
            placeHolder="Take a note..."
            defaultValue={note.content}
            classname="content"
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            AutoFocus={true}
          />
          </div>
          
        </div>
        <div className="edit-options">
          <div className="options">
            <div onClick={() => handlePinned(pinnedNote)}>
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
            <div onClick={() => handleDelete(note._id)}>
              <i className="fa-regular fa-trash-can"></i>
            </div>
          </div>
          <div className="edit">
            <div className="cancel" onClick={() => onClose(false)}>
              cancel
            </div>
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
