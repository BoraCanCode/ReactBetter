import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../../redux/reducers/todoReducer";
import { notificationSelector } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  // Show alert when message changes
  useEffect(() => {
    if (message) {
      setShowAlert(true);
      // Auto-hide alert after 3 seconds
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      setTodoText("");
      dispatch(todoAction.add(todoText));
    }
  };

  return (
    <div className="container">
      {/* Alert Popup */}
      {showAlert && message && (
        <div
          className="alert alert-success alert-dismissible fade show position-fixed"
          style={{
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1050,
            minWidth: '300px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
          role="alert"
        >
          <strong>Success!</strong> {message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowAlert(false)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter your todo..."
        />
        <button className="btn btn-success" type="submit">
          ✨ Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;