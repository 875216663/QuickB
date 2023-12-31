import React from 'react';
import Button from '@mui/material/Button';
import './ChoicesArea.css'; 

function ChoicesArea({ choices, setChoices, selectedLine, setSelectedLine }) {
  return (
    <div className="choices-area-container">
      <label className="choices-label">Choices</label>
      <div className='rightPart'>
      <textarea
        className={`choices-textarea `}
        value={choices.map((each) => each.value).join("\n")}
        rows={10}
        readOnly
        onClick={(e) => {
          const cursorPosition = e.target.selectionStart; //Getting the cursor position
          const lines = e.target.value.substr(0, cursorPosition).split("\n"); 
          const lineNumber = lines.length - 1;
          setSelectedLine(lineNumber);
        }}
      />
      <Button
        className="choices-button"
        variant="outlined"
        type="button"
        onClick={() => {
          if (selectedLine !== null) {
            const newChoices = [...choices];
            newChoices.splice(selectedLine, 1);//Remove elements from the choices array
            setChoices(newChoices);
            setSelectedLine(null);  
          }
        }}
      >
        Delete
      </Button>
      </div>
    </div>
  );
}

export default ChoicesArea;
