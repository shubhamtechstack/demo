import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete }) {
  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
