import { useSelector, useDispatch } from "react-redux";
import { noteAction } from "../../redux/reducers/noteReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";
import { formatDate } from "../../utils/dateUtils";

function NoteList() {
  const notes = useSelector(noteSelector);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>📅 {formatDate(note.createdOn)}</p>
            <p className="note-content">{note.text}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(noteAction.delete(index))}
            >
              🗑️ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
