import React from 'react';
import TextField from '@mui/material/TextField';
import './LabelInput.css';


function LabelInput({ label, setLabel }) {
  return (
    <div className="label-input-container">
      <span className="label-text">Label</span>
      <TextField
        lang="en"
        name="label1234"
        className="label-field"
        label="Please enter a label"
        variant="outlined"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        // required
        InputProps={{ className: 'label-input' }}
        helperText={label ? '' : 'This field is required.'}
        error={!label}
      />
    </div>
  );
}

export default LabelInput;
