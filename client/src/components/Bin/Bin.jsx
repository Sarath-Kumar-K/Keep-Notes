import React from "react";
import '../Editlabel/editlabel.css';

const Bin = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="icon">
          <i className="fa-regular fa-trash-can"></i>
        </div>
        <div className="description">
          <p>Your recent deleted notes will appear here</p>
        </div>
        <div className="announcement">
          <p>This feature is still on implementation</p>
        </div>
      </div>
    </div>
  );
};

export default Bin;
