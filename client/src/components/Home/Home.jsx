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

  
    // const notes = [
    //     {
    //         "_id": "666aaf5625023b7f1a6a6a74",
    //         "title": "third only title",
    //         "pinned": true,
    //         "slug": "third-only-titl",
    //         "createdAt": "2024-06-13T08:35:34.350Z",
    //         "updatedAt": "2024-06-13T08:35:34.350Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "666aae6225023b7f1a6a6a72",
    //         "content": "second only content",
    //         "pinned": false,
    //         "slug": "second-only-content",
    //         "createdAt": "2024-06-13T08:31:30.521Z",
    //         "updatedAt": "2024-06-13T08:31:30.521Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "666aacb0ac3413b9c25ffca2",
    //         "title": "first title",
    //         "content": "first content",
    //         "pinned": false,
    //         "slug": "first-title",
    //         "createdAt": "2024-06-13T08:24:16.299Z",
    //         "updatedAt": "2024-06-13T08:24:16.299Z",
    //         "__v": 0
    //     },
    //     {
    //       "_id": "666aaf5625023b7f1a6a6a74",
    //       "title": "third only title",
    //       "pinned": true,
    //       "slug": "third-only-titl",
    //       "createdAt": "2024-06-13T08:35:34.350Z",
    //       "updatedAt": "2024-06-13T08:35:34.350Z",
    //       "__v": 0
    //   },
    //   {
    //       "_id": "666aae6225023b7f1a6a6a72",
    //       "content": "second only content",
    //       "pinned": false,
    //       "slug": "second-only-content",
    //       "createdAt": "2024-06-13T08:31:30.521Z",
    //       "updatedAt": "2024-06-13T08:31:30.521Z",
    //       "__v": 0
    //   },
    //   {
    //       "_id": "666aacb0ac3413b9c25ffca2",
    //       "title": "first title",
    //       "content": "first content",
    //       "pinned": false,
    //       "slug": "first-title",
    //       "createdAt": "2024-06-13T08:24:16.299Z",
    //       "updatedAt": "2024-06-13T08:24:16.299Z",
    //       "__v": 0
    //   },
    //   {
    //     "_id": "666aaf5625023b7f1a6a6a74",
    //     "title": "third only title",
    //     "pinned": true,
    //     "slug": "third-only-titl",
    //     "createdAt": "2024-06-13T08:35:34.350Z",
    //     "updatedAt": "2024-06-13T08:35:34.350Z",
    //     "__v": 0
    // },
    // {
    //     "_id": "666aae6225023b7f1a6a6a72",
    //     "content": "second only content",
    //     "pinned": false,
    //     "slug": "second-only-content",
    //     "createdAt": "2024-06-13T08:31:30.521Z",
    //     "updatedAt": "2024-06-13T08:31:30.521Z",
    //     "__v": 0
    // },
    // {
    //     "_id": "666aacb0ac3413b9c25ffca2",
    //     "title": "first title",
    //     "content": "first content",
    //     "pinned": false,
    //     "slug": "first-title",
    //     "createdAt": "2024-06-13T08:24:16.299Z",
    //     "updatedAt": "2024-06-13T08:24:16.299Z",
    //     "__v": 0
    // }
    // ];
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