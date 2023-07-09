import React, { useState } from 'react';

const Content = () => {
  const [text, setText] = useState('');
  const [enteredText, setEnteredText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    setEnteredText(text);
    setText('');
  };

  return (
    <div>
      <textarea value={text} onChange={handleInputChange} /> <br />
      <button onClick={handleButtonClick}>Submit</button>
      {enteredText && <p>{enteredText}</p>}
    </div>
  );
};

export default Content;
