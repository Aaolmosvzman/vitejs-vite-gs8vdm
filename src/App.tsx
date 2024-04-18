import React, { useState } from 'react';
import './App.css';

interface Todo {
  text: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { text: 'Comprar pan', isCompleted: false },
    { text: 'Pasear al perro', isCompleted: false },
    { text: 'Leer un libro', isCompleted: false }
  ]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="todo"
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
          >
            {todo.text}
            <div>
              <button onClick={() => completeTodo(index)}>Todo correcto 😎</button>
              <button onClick={() => removeTodo(index)}>🛇</button>
            </div>
          </div>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const textInput = e.target.elements[0] as HTMLInputElement;
            addTodo(textInput.value);
            textInput.value = '';
          }}
        >
          <input type="text" placeholder="Añadir tarea..." /> 
          <button type="submit">Añadir</button> 
        </form>
      </div>
    </div>
  );
};

export default App;
