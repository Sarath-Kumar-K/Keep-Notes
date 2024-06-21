import React, { useEffect, useState } from 'react'
import './home.css';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Notes from '../Notes/Notes.jsx';
import {useLocation } from "react-router-dom";
import Editlabel from '../Editlabel/Editlabel.jsx';
import Archive from '../Archive/Archive.jsx';
import Remainders from '../Remainders/Remainders.jsx';
import Bin from '../Bin/Bin.jsx';
const Home = () => {
  const [tab, setTab] = useState("notes");
  const location = useLocation();
  
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);

  return (
    <div className='home'>
      {/* {sidebar} */}
      <Sidebar Tab={tab}/>

      {/* {notes} */}
      {(tab === "notes" || !tab) && <Notes tab={tab}/>}

      {/* {remainders} */}
      {tab === "remainders" && <Remainders tab={tab}/>}

      {/* {edit-labels} */}
      {tab === "editlabels" && <Editlabel tab={tab}/>}

      {/* {archive} */}
      {tab === "archive" && <Archive tab={tab}/>}

      {/* {bin} */}
      {tab === "bin" && <Bin tab={tab}/>}

      {/* search */}
      {tab === "search" && <Notes tab={tab}/>}
    </div>
  )
}

export default Home