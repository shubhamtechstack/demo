import { useState, useCallback } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css"
 function App() {
  const [todos, setTodos] = useState([]);

  // Add Todo (memoized with useCallback)
  const handleAddTodo = useCallback((text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
  }, []);

  // Delete Todo
  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo App</h2>

      <TodoInput onAddTodo={handleAddTodo} />

      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}
export default App