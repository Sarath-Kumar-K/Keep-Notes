import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
    {
        title:{
            type:String,
        },
        content:{
            type:String,
        },
        pinned:{
            type:Boolean,
            default:false,
        },
        archived:{
            type:Boolean,
            default:false,
        },
        slug:{
            type:String,
            required:true,
            unique:true,
        },

    }, {timestamps:true}
);

const Note = mongoose.model('Note',noteSchema);

export default Note;