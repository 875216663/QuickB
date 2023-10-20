import React from 'react';
import TextField from '@mui/material/TextField';

function LabelInput({ label, setLabel }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '6%',marginRight: '20%' ,marginTop: '30px'}}>
      <span style={{ flex: 1, textAlign: 'left' }}>Label</span>
      <TextField
        style={{ flex: 2 }}
        id="outlined-basic"
        label=""
        variant="outlined"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
        inputProps={{ style: { height: '30px' }, placeholder: 'Please input a label' }}
      />
    </div>
  );
}

export default LabelInput;
