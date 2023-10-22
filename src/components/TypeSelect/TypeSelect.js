import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import './TypeSelect.css'; // Import the CSS file


function TypeSelect({ type, setType, isRequired, setIsRequired }) {
  return (
    <div className="type-select-container">
      <span className="type-text">Type</span>
      <div className='right'> 
      <select className="type-dropdown" value={type} onChange={(e) => setType(e.target.value)}>
        <option>Multi-select</option>
        <option>Single-select</option>
      </select>
      <Checkbox 
        className="type-checkbox"
        type="checkbox"
        checked={isRequired}
        onChange={() => setIsRequired(!isRequired)}
      />
      <span className="type-requirement-text">A value is required</span>
      </div>
    </div>
  );
}

export default TypeSelect;
