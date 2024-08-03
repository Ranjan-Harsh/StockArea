import React from 'react';
import { Link } from 'react-router-dom';

function WarehouseList({ warehouses }) {
  return (
    <ul>
      {warehouses.map((warehouse) => (
        <li key={warehouse.id}>
          <Link to={`/warehouse/${warehouse.id}`}>
            {warehouse.name} - {warehouse.city}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default WarehouseList;