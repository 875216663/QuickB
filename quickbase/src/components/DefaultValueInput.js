import React from 'react';
import TextField from '@mui/material/TextField';

function DefaultValueInput({ defaultValue, setDefaultValue, setChoices, choices }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' , marginLeft: '6%',marginRight: '20%',marginTop: '20px'}}>
      <span style={{ flex: 1, textAlign: 'left' }}>Default Value</span>
      <TextField
        id="outlined-basic" variant="outlined"
        style={{ flex: 2 }}  // Added style here
        inputProps={{ style: { height: '30px' } }}
        type="text"
        value={defaultValue}
        onChange={(e) => setDefaultValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            const trimmedValue = defaultValue.trim();

            if (choices.length >= 50) {
              alert("You cannot add more than 50 choices.");
              return;
            }

            if (trimmedValue !== "") {
              if (!choices.map((each) => each.value).includes(trimmedValue)) {
                setChoices((prevChoices) => [
                  ...prevChoices,
                  { value: trimmedValue, time: new Date() },
                ]);
                setDefaultValue("");
              } else {
                alert("Cannot add existing choice");
              }
            }
          }
        }}
      />
    </div>
  );
}

export default DefaultValueInput;
