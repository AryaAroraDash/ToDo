import React, { useState, useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { TodoContext } from '../contexts/TodoContext';

const AddTodo = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Row className="align-items-center">
        <Col>
          <Form.Control
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add new todo"
            required
            className="input-field"
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddTodo;
