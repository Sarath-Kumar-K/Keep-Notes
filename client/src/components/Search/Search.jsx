import React, { useEffect } from 'react'
import useNotes from '../../hooks/useNotes';

const Search = ({tab}) => {
    const [notes] = useNotes();
    useEffect(()=>{
    },[notes])
  return (
    <div>
        {notes.map()}
    </div>
  )
}

export default Search