import React from 'react';
import Button from '@mui/material/Button';
import './ChoicesArea.css'; // Import the CSS file

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
          const cursorPosition = e.target.selectionStart; //返回一个整数，表示从文本区域开头到当前光标的字符数量
          const lines = e.target.value.substr(0, cursorPosition).split("\n"); // Get the line number of the cursor
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
            newChoices.splice(selectedLine, 1);//从数组中删除元素
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
