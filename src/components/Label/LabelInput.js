import React from 'react';
import TextField from '@mui/material/TextField';
import './LabelInput.css';

function LabelInput({ label, setLabel }) {
  return (
    <div className="label-input-container">
      <span className="label-text">Label</span>
      <TextField
        className="label-field"
        label="Please enter a label"
        variant="outlined"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
        InputProps={{ className: 'label-input' }}
      />
    </div>
  );
}

export default LabelInput;
