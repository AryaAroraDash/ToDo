import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { TodoContext } from '../contexts/TodoContext';

const Filter = () => {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <ButtonGroup className="mb-3">
      <Button
        variant={filter.type === 'ALL' ? 'primary' : 'secondary'}
        onClick={() => setFilter({ type: 'ALL', query: '' })}
      >
        All
      </Button>
      <Button
        variant={filter.type === 'PENDING' ? 'primary' : 'secondary'}
        onClick={() => setFilter({ type: 'PENDING', query: '' })}
      >
        Pending
      </Button>
      <Button
        variant={filter.type === 'COMPLETED' ? 'primary' : 'secondary'}
        onClick={() => setFilter({ type: 'COMPLETED', query: '' })}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};

export default Filter;
