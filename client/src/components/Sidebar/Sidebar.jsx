import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({Tab}) => {
  const [tab, setTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);

  return (
    <div className="sidebar">
      <Link to="/?tab=notes" className="link">
        <div className="menu-item" style={{backgroundColor:Tab==='notes'?'rgb(240, 225, 176)':''}}>
          <i className="fa-regular fa-lightbulb"></i>
          <p>Notes</p>
        </div>
      </Link>
      <Link to="/?tab=remainders" className="link">
        <div className="menu-item" style={{backgroundColor:Tab==='remainders'?'rgb(240, 225, 176)':''}}>
          <i className="fa-regular fa-bell"></i>
          <p>Remainders</p>
        </div>
      </Link>
      <Link to="/?tab=editlabels" className="link">
        <div className="menu-item" style={{backgroundColor:Tab==='editlabels'?'rgb(240, 225, 176)':''}}>
          <i className="bi bi-pencil"></i>
          <p>Edit labels</p>
        </div>
      </Link>
      <Link to="/?tab=archive" className="link">
        <div className="menu-item" style={{backgroundColor:Tab==='archive'?'rgb(240, 225, 176)':''}}>
          <i className="bi bi-box-arrow-down"></i>
          <p>Archive</p>
        </div>
      </Link>
      <Link to="/?tab=bin" className="link">
        <div className="menu-item" style={{backgroundColor:Tab==='bin'?'rgb(240, 225, 176)':''}}>
          <i className="fa-regular fa-trash-can"></i>
          <p>Bin</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
