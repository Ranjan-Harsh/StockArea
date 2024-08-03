import React, { useState } from 'react';

function CustomFieldForm({ onAddField }) {
  const [fieldName, setFieldName] = useState('');
  const [fieldValue, setFieldValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fieldName && fieldValue) {
      onAddField({ name: fieldName, value: fieldValue });
      setFieldName('');
      setFieldValue('');
    }
  };

  return (
    <div className="custom-field-form">
      <h3>Add Custom Field</h3>
      <form onSubmit={handleSubmit}>
        <div className="custom-field-inputs">
          <input
            placeholder="Field name"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
          />
          <input
            placeholder="Field value"
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
          />
          <button type="submit" className="button">Add Field</button>
        </div>
      </form>
    </div>
  );
}

export default CustomFieldForm;