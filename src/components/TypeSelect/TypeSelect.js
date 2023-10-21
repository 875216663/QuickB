import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import './TypeSelect.css'; // Import the CSS file

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function TypeSelect({ type, setType, isRequired, setIsRequired }) {
  return (
    <div className="type-select-container">
      <span className="type-text">Type</span>
      <select className="type-dropdown" value={type} onChange={(e) => setType(e.target.value)}>
        <option>Multi-select</option>
        <option>Single-select</option>
      </select>
      <Checkbox 
        className="type-checkbox"
        {...label}
        type="checkbox"
        checked={isRequired}
        onChange={() => setIsRequired(!isRequired)}
      />
      <span className="type-requirement-text">A value is required</span>
    </div>
  );
}

export default TypeSelect;
