import React, { useState, useContext } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { TodoContext } from '../contexts/TodoContext';
import './Auth.css';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="auth-background">
      <Container className="auth-container d-flex align-items-center justify-content-center">
        <Row className="w-100">
          <Col md={{ span: 4, offset: 4 }}>
            <Card className="auth-card shadow-lg">
              <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formUsername" className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter username"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Auth;
