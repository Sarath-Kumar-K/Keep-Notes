import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
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
        <div className="menu-item active">
          <i className="fa-regular fa-lightbulb"></i>
          <p>Notes</p>
        </div>
      </Link>
      <Link to="/?tab=remainders" className="link">
        <div className="menu-item">
          <i className="fa-regular fa-bell"></i>
          <p>Remainders</p>
        </div>
      </Link>
      <Link to="/?tab=edit-label" className="link">
        <div className="menu-item">
          <i className="bi bi-pencil"></i>
          <p>Edit labels</p>
        </div>
      </Link>
      <Link to="/?tab=archive" className="link">
        <div className="menu-item">
          <i className="bi bi-box-arrow-down"></i>
          <p>Archive</p>
        </div>
      </Link>
      <Link to="/?tab=bin" className="link">
        <div className="menu-item">
          <i className="fa-regular fa-trash-can"></i>
          <p>Bin</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
