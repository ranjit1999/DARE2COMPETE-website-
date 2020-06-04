import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter({ filterChangeHandler }) {
  const filters = [
    'Workshops',
    'Startups',
    'Camps',
    'Case study',
    'Design',
    'Web development',
    'Android',
  ];

  return (
    <div className="filter">
      <span className="filter-select">Select Interview Category:</span>
      <select className="select-filter" name="filter" onChange={e => filterChangeHandler(e.target.value)}>
        {filters.map(filter => (
          <option key={filter}>{filter}</option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  filterChangeHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
