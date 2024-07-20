import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { filteredTodos, toggleComplete, deleteTodo, updateTodo } = useContext(TodoContext);

  return (
    <ul className="list-group">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => toggleComplete(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          onUpdate={(newText) => updateTodo(todo.id, newText)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
