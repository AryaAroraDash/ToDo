import React, { useState } from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap';

const TodoItem = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    if (text.trim()) {
      onUpdate(text);
      setIsEditing(false);
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {isEditing ? (
        <div className="d-flex">
          <Form.Control
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mr-2"
          />
          <Button variant="success" onClick={handleUpdate}>Save</Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-center w-100">
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={onToggle}
            className="flex-grow-1"
          >
            {todo.text}
          </span>
          <div>
            <Button  onClick={() => setIsEditing(true)} className="mr-2">Edit</Button>
            <Button  onClick={onDelete}>Delete</Button>
          </div>
        </div>
      )}
    </ListGroup.Item>
  );
};

export default TodoItem;
