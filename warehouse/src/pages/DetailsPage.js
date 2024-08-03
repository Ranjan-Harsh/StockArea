import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateWarehouse } from '../redux/actions';
import WarehouseDetails from '../components/WarehouseDetails';

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const warehouse = useSelector((state) =>
    state.warehouses.find((w) => w.id === parseInt(id))
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedWarehouse) => {
    dispatch(updateWarehouse(updatedWarehouse));
    setIsEditing(false);
  };

  const handleAddCustomField = (field) => {
    const updatedWarehouse = {
      ...warehouse,
      customFields: [...(warehouse.customFields || []), field]
    };
    dispatch(updateWarehouse(updatedWarehouse));
  };

  if (!warehouse) return <div>Warehouse not found</div>;

  return (
    <div className="warehouse-details-page">
      <WarehouseDetails
        warehouse={warehouse}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onUpdate={handleUpdate}
        onCancel={() => setIsEditing(false)}
        onAddCustomField={handleAddCustomField}
      />
    </div>
  );
}

export default DetailsPage;