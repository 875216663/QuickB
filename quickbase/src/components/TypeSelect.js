import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function TypeSelect({ type, setType, isRequired, setIsRequired }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' , marginLeft: '6%',marginRight: '20%',marginTop: '20px'}}>
      <span style={{ flex: 1, textAlign: 'left' }}>Type</span>
      <select 
        style={{ flex: 1, marginRight: '20px', marginLeft: '40px' }} // Added marginLeft
        value={type} 
        onChange={(e) => setType(e.target.value)}
      >
        <option>Multi-select</option>
        <option>Single-select</option>
      </select>
      <Checkbox 
        style={{ flex: 0, marginRight: '5px' }}
        {...label}
        type="checkbox"
        checked={isRequired}
        onChange={() => setIsRequired(!isRequired)}
      />
      <span style={{ flex: 1 }}>A value is required</span>
    </div>
  );
}


export default TypeSelect;
