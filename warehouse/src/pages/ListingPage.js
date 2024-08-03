import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWarehouses } from '../redux/actions';
import WarehouseList from '../components/WarehouseList';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';

function ListingPage() {
  const dispatch = useDispatch();
  const warehouses = useSelector((state) => state.warehouses);
  const [filteredWarehouses, setFilteredWarehouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ city: '', cluster: '', spaceAvailable: '' });

  useEffect(() => {
    fetch('/warehouse.json')
      .then((response) => response.json())
      .then((data) => dispatch(setWarehouses(data)));
  }, [dispatch]);

  useEffect(() => {
    let result = warehouses;

    if (searchTerm) {
      result = result.filter((w) =>
        w.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.city) {
      result = result.filter((w) => w.city === filters.city);
    }

    if (filters.cluster) {
      result = result.filter((w) => w.cluster === filters.cluster);
    }

    if (filters.spaceAvailable) {
      result = result.filter((w) => w.space_available >= parseInt(filters.spaceAvailable));
    }

    setFilteredWarehouses(result);
  }, [warehouses, searchTerm, filters]);

  return (
    <div>
      <h1>Warehouses</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar filters={filters} setFilters={setFilters} />
      <WarehouseList warehouses={filteredWarehouses} />
    </div>
  );
}

export default ListingPage;