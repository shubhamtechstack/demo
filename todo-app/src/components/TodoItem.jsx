import { memo } from "react";

// memo prevents re-renders (optimizes performance)
const TodoItem = memo(function TodoItem({ todo, onDelete }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px"
      }}
    >
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});

export default TodoItem;
