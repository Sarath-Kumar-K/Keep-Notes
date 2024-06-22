import React from 'react'
import './errorpopup.css';
const Errorpopup = ({error, onClose}) => {
  return (
    <div className="error-container">
      <div className="error-message">{error}</div>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default Errorpopup