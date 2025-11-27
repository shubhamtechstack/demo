import { useRef, useState } from "react";

export default function TodoInput({ onAddTodo }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    onAddTodo(input);
    setInput("");

    inputRef.current.focus(); // useRef to focus back
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px" }}
      />
      
      <button style={{ marginLeft: "10px" }}>Add</button>
    </form>
  );
}
