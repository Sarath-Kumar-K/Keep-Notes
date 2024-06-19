import Note from "../models/note.model.js";
import { errorHandler } from "../utils/error.js";

export const createNote = async (req, res, next) => {
  if (!req.body.title && !req.body.content) {
    return next(errorHandler(400, "Title or Content is required"));
  }

  let slugContent;
  if (req.body.title) {
    if (req.body.title.length > 25) {
      slugContent = req.body.title.substring(0, 25);
    } else {
      slugContent = req.body.title;
    }
  } else {
    if (req.body.content.length > 25) {
      slugContent = req.body.content.substring(0, 25);
    } else {
      slugContent = req.body.content;
    }
  }

  const slug = slugContent
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "-");

  const newNote = new Note({
    ...req.body,
    slug,
  });

  try {
    const savedNote = await newNote.save();
    res.status(200).json(savedNote);
  } catch (error) {
    next(error);
  }
};

export const getNotes = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;

  try {
    const notes = await Note.find()
      .sort({ pinned: -1, createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalNotes = await Note.countDocuments();
    res.status(200).json({
      notes,
      totalNotes,
    });
  } catch (error) {
    next(error);
  }
};

export const searchNote = async (req, res, next) => {
  const searchTerm = req.query.searchTerm || null;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;

  console.log("search Term = " + searchTerm);

  const searchFilter = searchTerm
    ? {
        $or: [
          { title: { $regex: searchTerm, $options: "i" } },
          { content: { $regex: searchTerm, $options: "i" } },
        ],
      }
    : {};
  console.log("Search Filter =", JSON.stringify(searchFilter));
  try {
    const totalNotes = await Note.countDocuments(searchFilter);
    const notes = await Note.find(searchFilter)
      .skip((page - 1) * limit)
      .limit(limit);
    console.log("Notes Found =", notes);
    res.status(200).json({
      notes,
      totalNotes,
    });
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  const noteId = req.params.noteId;

  let slugContent;
  if (req.body.title) {
    if (req.body.title.length > 25) {
      slugContent = req.body.title.substring(0, 25);
    } else {
      slugContent = req.body.title;
    }
  } else {
    if (req.body.content.length > 25) {
      slugContent = req.body.content.substring(0, 25);
    } else {
      slugContent = req.body.content;
    }
  }

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          pinned: req.body.pinned,
          slug: slugContent
            .split(" ")
            .join("-")
            .toLowerCase()
            .replace(/[^a-zA-Z0-9-]/g, "-"),
        },
      },
      { new: true }
    );

    res.status(200).json(updatedNote);
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  const noteId = req.params.noteId ? req.params.noteId : null;

  try {
    await Note.findByIdAndDelete(noteId);
    res.status(200).json("This note has been deleted");
  } catch (error) {
    next(error);
  }
};
