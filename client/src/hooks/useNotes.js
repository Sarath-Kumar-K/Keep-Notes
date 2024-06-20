import React, { useState, useEffect } from "react";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [totalNotes, setTotalNotes] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0);

  const fetchNotes = async () => {
    try {
      const res = await fetch(`/api/note/getnotes?page=${page}&limit=${limit}`, {
        method: "GET",
      });
      const data = await res.json();
      if (res.ok) {
        setNotes(data.notes);
        setTotalNotes(data.totalNotes);
        // return ([{"notes":data.notes},{"totalNotes":data.totalNotes}])
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [trigger]);

  const addNote = async (note) => {
    try {
      const res = await fetch(`/api/note/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      const data = await res.json();
      if (res.ok) {
        setTrigger(prev => prev + 1);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const editNote = async (noteId, updatedNote) => {
    try {
      const res = await fetch(`/api/note/update/${noteId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNote),
      });
      const data = await res.json();
      if (res.ok) {
        setTrigger(prev => prev + 1);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      const res = await fetch(`/api/note/delete/${noteId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setTrigger(prev => prev + 1);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const searchNote = async (searchTerm) =>{
    try{
      const res = await fetch(`/api/note/searchnote?searchTerm=${searchTerm}`,{
        method:"GET",
      });
      const data = await res.json();
      if(res.ok){
        setNotes(data.notes);
        setTotalNotes(data.totalNotes);
      }else{
        setError(error.message)
      }
    }catch(error){
      setError(error.message);
    }
  };

  return { notes, totalNotes, page, setTrigger, setPage, fetchNotes, addNote, editNote, deleteNote, searchNote, error };
};


export default useNotes;
