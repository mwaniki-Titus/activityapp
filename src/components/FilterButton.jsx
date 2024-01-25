import React from 'react';
import './FilterButton.scss';


const FilterButtons = ({ filter, filterTodos }) => {
  return (
    <div>
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => filterTodos('all')}
      >
        All
      </button>
      <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => filterTodos('active')}
      >
        Active
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => filterTodos('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
