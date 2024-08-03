import React from 'react';

function FilterBar({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filter-container">
      <input
        name="city"
        placeholder="Filter by city"
        value={filters.city}
        onChange={handleChange}
      />
      <input
        name="cluster"
        placeholder="Filter by cluster"
        value={filters.cluster}
        onChange={handleChange}
      />
      <input
        name="spaceAvailable"
        type="number"
        placeholder="Space available limit"
        value={filters.spaceAvailable}
        onChange={handleChange}
      />
    </div>
  );
}

export default FilterBar;