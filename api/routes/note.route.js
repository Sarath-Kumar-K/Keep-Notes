import express from 'express';
import {createNote, getNotes} from '../controllers/note.controller.js';

const router = express.Router();

router.post('/create',createNote);
router.get('/getnotes',getNotes);
// router.get('/getnotes/pinned',getPinnedNotes);
// router.get('/getnotes/unpinned',getUnpinnedNotes);
// router.put('/update/:noteId',updateNote);
// router.delete('/delete/:noteId',deleteNote);

export default router;