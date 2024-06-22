import React, {useEffect} from "react";
import './successpopup.css';
const Successpopup = ({message, onClose}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000); // Auto close after 3 seconds
    return () => clearTimeout(timeout);
  }, [onClose]);
  return (
    <div className="success-container">
      <div className="success-message">{message}</div>
      <div className="progress-bar"></div>
    </div>
  );
};

export default Successpopup;
