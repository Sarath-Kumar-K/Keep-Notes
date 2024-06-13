import Note from '../models/note.model.js';
import {errorHandler} from '../utils/error.js';

export const createNote = async (req,res,next) => {
    if(!req.body.title && !req.body.content){
        return next(errorHandler(400,"Title or Content is required"))
    }

    let slugContent;
    if(req.body.title){
        if((req.body.title).length > 25){
            slugContent = (req.body.title).substring(0,25);
        }else{
            slugContent = (req.body.title);
        }
    }else{
        if((req.body.content).length > 25){
            slugContent = (req.body.content).substring(0,25);
        }else{
            slugContent = (req.body.content);
        }
    }

    const slug = slugContent.split(" ").join('-').toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");

    const newNote = new Note({
        ...req.body,
        slug,
    });

    try{
        const savedNote = await newNote.save();
        res.status(200).json(savedNote);
    }catch(error){
        next(error);
    }
};

export const getNotes = async (req,res,next) => {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 6;
    const sortDirection = req.query.order === "asc"
}