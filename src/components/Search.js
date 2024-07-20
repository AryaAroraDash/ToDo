import React, { useState, useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { TodoContext } from '../contexts/TodoContext';

const Search = () => {
  const [query, setQuery] = useState('');
  const { setFilter } = useContext(TodoContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setFilter({ type: 'SEARCH', query });
  };

  return (
    <Form onSubmit={handleSearch} className="mb-3">
      <Row className="align-items-center">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search todos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-field"
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;
