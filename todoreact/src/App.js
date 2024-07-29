import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("list_todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("list_todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div id="app">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <a href="#" onClick={() => handleDeleteTodo(index)}>Excluir</a>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Digite um todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Adicionar</button>
    </div>
  );
}

export default App;
