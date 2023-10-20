import React from 'react';
import Button from '@mui/material/Button';

function ChoicesArea({ choices, setChoices, selectedLine, setSelectedLine }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '6%', marginRight: '20%', marginTop: '20px' }}>
      <label style={{ flex: 1 }}>Choices</label>
      <textarea
        style={{
          flex: 2,
          marginRight: '30px',
          marginLeft: '68px',
          marginTop: '20px',
          caretColor: 'transparent', // Hide cursor
          boxShadow: selectedLine !== null ? '0 0 5px rgba(0,0,0,0.5)' : 'none' // Add shadow if selected
        }}
        value={choices.map((each) => each.value).join("\n")}
        rows={10}
        readOnly
        onClick={(e) => {
          const cursorPosition = e.target.selectionStart;
          const lines = e.target.value.substr(0, cursorPosition).split("\n");
          const lineNumber = lines.length - 1;
          setSelectedLine(lineNumber);
        }}
      />
      <Button
        variant="outlined"
        type="button"
        onClick={() => {
          if (selectedLine !== null) {
            const newChoices = [...choices];
            newChoices.splice(selectedLine, 1);
            setChoices(newChoices);
            setSelectedLine(null);
          }
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default ChoicesArea;
