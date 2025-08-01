import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/actions/noteActions";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(noteText));
    setNoteText("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control mb-3"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write your note here..."
        />
        <button className="btn btn-success" type="submit">
          📝 Create Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
