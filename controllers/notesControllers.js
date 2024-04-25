import Notes from "../models/Notes.js";

export const addNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (title === "" || content === "") {
      res.status(401).json({ message: "Veuillez remplir les champs " });
    }

    const note = new Notes({
      title: title,
      content: content,
    });

    await note.save();
    res.status(200).json({ message: "Note save" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

