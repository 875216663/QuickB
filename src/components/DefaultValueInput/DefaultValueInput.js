import React from 'react';
import TextField from '@mui/material/TextField';
import './DefaultValueInput.css';  // Import the CSS file

function DefaultValueInput({ defaultValue, setDefaultValue, setChoices, choices }) {



  return (
    <div className="default-value-container">
      <span className="default-value-label">Default Value</span>
      <TextField
        variant="outlined"
        className="default-value-textfield"
        type="text"
        value={defaultValue}
        onChange={(e) => {
          const inputValue = e.target.value;
          setDefaultValue(inputValue);
          
        }}
        helperText={ defaultValue.length > 40 ? 'It is over 40 characters.' : ''}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            const trimmedValue = defaultValue.trim();

            if (choices.length >= 5) {
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
