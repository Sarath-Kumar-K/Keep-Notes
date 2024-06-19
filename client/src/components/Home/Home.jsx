import React, { useEffect, useState } from 'react'
import './home.css';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Notes from '../Notes/Notes.jsx';
import {useLocation } from "react-router-dom";
const Home = () => {
  const [tab, setTab] = useState("notes");
  const location = useLocation();
  const [notes, setNotes] = useState([]);
  const [dataChange, setDataChange] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);

  const updateNotes = (newNotes) => {
    setNotes(newNotes);
  }
  useEffect(()=>{
    const fetchNotes = async () =>{
      try{
        const res = await fetch(`/api/note/getnotes`,{
          method:"GET"
        });
        const data = await res.json();
        if(data){
          setNotes(data.notes);
        }
      }catch(error){
        console.log(error.message);
      }
    }
    fetchNotes();
  },[dataChange]);
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
      <Sidebar />

      {/* {notes} */}
      {(tab === "notes" || !tab) && <Notes notes={notes} updateNotes={updateNotes} />}

      {/* {remainders} */}
      {tab === "remainders" && <Remainders />}

      {/* {edit-labels} */}
      {tab === "edit-labels" && <EditLabels />}

      {/* {archive} */}
      {tab === "archive" && <Archive />}

      {/* {bin} */}
      {tab === "bin" && <Bin />}
    </div>
  )
}

export default Home