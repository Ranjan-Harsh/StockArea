import React, { useState, useEffect } from 'react';
import CustomFieldForm from './CustomFieldForm';

function WarehouseDetails({ warehouse, isEditing, onEdit, onUpdate, onCancel, onAddCustomField }) {
  const [editedWarehouse, setEditedWarehouse] = useState(warehouse);

  useEffect(() => {
    setEditedWarehouse(warehouse);
  }, [warehouse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedWarehouse({ ...editedWarehouse, [name]: value });
  };

  const handleCustomFieldChange = (index, field, value) => {
    const updatedCustomFields = [...(editedWarehouse.customFields || [])];
    updatedCustomFields[index] = { ...updatedCustomFields[index], [field]: value };
    setEditedWarehouse({ ...editedWarehouse, customFields: updatedCustomFields });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedWarehouse);
  };

  const renderCustomFields = () => {
    return (warehouse.customFields || []).map((field, index) => (
      <p key={index}>
        {field.name}: {field.value}
      </p>
    ));
  };

  if (isEditing) {
    return (
      <div className="warehouse-details">
        <h2>Edit Warehouse</h2>
        <form onSubmit={handleSubmit} className="edit-form">
          <input
            name="name"
            value={editedWarehouse.name}
            onChange={handleChange}
            placeholder="Warehouse Name"
          />
          <input
            name="city"
            value={editedWarehouse.city}
            onChange={handleChange}
            placeholder="City"
          />
          <input
            name="cluster"
            value={editedWarehouse.cluster}
            onChange={handleChange}
            placeholder="Cluster"
          />
          <input
            name="space_available"
            type="number"
            value={editedWarehouse.space_available}
            onChange={handleChange}
            placeholder="Space Available"
          />
          <select
            name="is_live"
            value={editedWarehouse.is_live}
            onChange={handleChange}
          >
            <option value={true}>Live</option>
            <option value={false}>Not Live</option>
          </select>
          
          {/* Custom Fields */}
          <h3>Custom Fields</h3>
          {(editedWarehouse.customFields || []).map((field, index) => (
            <div key={index} className="custom-field-edit">
              <input
                value={field.name}
                onChange={(e) => handleCustomFieldChange(index, 'name', e.target.value)}
                placeholder="Field Name"
              />
              <input
                value={field.value}
                onChange={(e) => handleCustomFieldChange(index, 'value', e.target.value)}
                placeholder="Field Value"
              />
            </div>
          ))}
          
          <div className="button-group">
            <button type="button" className="button secondary" onClick={onCancel}>Cancel</button>
            <button type="submit" className="button">Save</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="warehouse-details">
      <h2>{warehouse.name}</h2>
      <p>City: {warehouse.city}</p>
      <p>Cluster: {warehouse.cluster}</p>
      <p>Space Available: {warehouse.space_available}</p>
      <p>Status: {warehouse.is_live ? 'Live' : 'Not Live'}</p>
      {renderCustomFields()}
      <button className="button" onClick={onEdit}>Edit</button>
      <CustomFieldForm onAddField={onAddCustomField} />
    </div>
  );
}

export default WarehouseDetails;