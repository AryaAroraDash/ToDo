import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState({ type: 'ALL', query: '' });
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    let newFilteredTodos = todos;

    if (filter.type === 'PENDING') {
      newFilteredTodos = todos.filter(todo => !todo.completed);
    } else if (filter.type === 'COMPLETED') {
      newFilteredTodos = todos.filter(todo => todo.completed);
    } else if (filter.type === 'SEARCH') {
      newFilteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(filter.query.toLowerCase())
      );
    }

    setFilteredTodos(newFilteredTodos);
  }, [todos, filter]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const updateTodo = (id, text) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const logout = () => {
    setUser(null);
  };

  const login = async (username, password) => {
    try {
      const response = await fetch('/users.json');
      const users = await response.json();
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        setUser({ username });
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <TodoContext.Provider value={{
      todos,
      filteredTodos,
      filter,
      setFilter,
      addTodo,
      toggleComplete,
      deleteTodo,
      updateTodo,
      user,
      login,
      logout
    }}>
      {children}
    </TodoContext.Provider>
  );
};
