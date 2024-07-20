import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const EditTodo = ({ todo, onSave, onCancel }) => {
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    if (text.trim()) {
      onSave(todo.id, text);
    }
  };

  return (
    <div>
      <Form.Group controlId="formEditTodo">
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" onClick={handleSave}>Save</Button>
      <Button variant="secondary" onClick={onCancel}>Cancel</Button>
    </div>
  );
};

export default EditTodo;
