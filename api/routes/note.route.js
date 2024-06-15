import express from 'express';
import {createNote, getNotes, searchNote, updateNote} from '../controllers/note.controller.js';

const router = express.Router();

router.post('/create',createNote);
router.get('/getnotes',getNotes);
router.get('/searchnote',searchNote)
// router.get('/getnotes/pinned',getPinnedNotes);
// router.get('/getnotes/unpinned',getUnpinnedNotes);
router.put('/update/:noteId',updateNote);
// router.delete('/delete/:noteId',deleteNote);

export default router;