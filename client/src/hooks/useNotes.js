import React, { useState, useEffect } from "react";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [totalNotes, setTotalNotes] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [trigger, setTrigger] = useState(0);

  const fetchNotes = async () => {
    try {
      setError(null);
      setSuccess(null);
      const res = await fetch(`/api/note/getnotes?page=${page}&limit=${limit}`, {
        method: "GET",
      });
      const data = await res.json();
      if (res.ok) {
        setNotes(data.notes);
        setTotalNotes(data.totalNotes);
      } else {
        setSuccess(null);
        setError(data.message);
      }
    } catch (error) {
      setSuccess(null);
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
        setError(null);
        setSuccess("Note added successfully");
        setTrigger(prev => prev + 1);
      } else {
        setSuccess(null);
        setError(data.message);
      }
    } catch (error) {
      setSuccess(null);
      setError(error.message);
    }
  };

  const editNote = async (noteId, updatedNote) => {
    try {
      setError(null);
      setSuccess(null);
      const res = await fetch(`/api/note/update/${noteId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNote),
      });
      const data = await res.json();
      if (res.ok) {
        setError(null);
        setSuccess("Note edited successfully");
        setTrigger(prev => prev + 1);
      } else {
        setSuccess(null);
        setError(data.message);
      }
    } catch (error) {
      setSuccess(null);
      setError(error.message);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      setError(null);
      setSuccess(null);
      const res = await fetch(`/api/note/delete/${noteId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setError(null);
        setSuccess("Note deleted successlly")
        setTrigger(prev => prev + 1);
      } else {
        setSuccess(null);
        setError(data.message);
      }
    } catch (error) {
      setSuccess(null);
      setError(error.message);
    }
  };

  const searchNote = async (searchTerm) =>{
    try{
      setError(null);
      setSuccess(null);
      const res = await fetch(`/api/note/searchnote?searchTerm=${searchTerm}`,{
        method:"GET",
      });
      const data = await res.json();
      if(res.ok){
        setNotes(data.notes);
        setTotalNotes(data.totalNotes);
      }else{
        setSuccess(null);
        setError(error.message)
      }
    }catch(error){
      setSuccess(null);
      setError(error.message);
    }
  };

  return { notes, totalNotes, page, setTrigger, setPage,setError, setSuccess, fetchNotes, addNote, editNote, deleteNote, searchNote, error, success };
};


export default useNotes;
