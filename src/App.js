// src/App.js
import React, { useContext } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { TodoContext, TodoProvider } from './contexts/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import Search from './components/Search';
import Auth from './components/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


const App = () => {
  const { user, logout } = useContext(TodoContext);

  return (
    <Container className="mt-4 todo-app">
      {user ? (
        <div>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={logout} style={{ marginBottom: '10px' }}>
              Logout
            </Button>
          </div>
          <div className="todo-box p-4">
            <AddTodo />
            <Row>
              <Col md={6}>
                <Search />
              </Col>
              <Col md={6}>
                <Filter />
              </Col>
            </Row>
            <TodoList />
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </Container>
  );
};

const Root = () => (
  <TodoProvider>
    <App />
  </TodoProvider>
);

export default Root;
