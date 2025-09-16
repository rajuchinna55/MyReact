import React, { useState } from 'react';

function KeyDownComponent() {
    const [inputValue, setInputValue] = useState('');
    const [valid, setValid] = useState(true);
  
    const handleKeyPress = (event) => {
      const charCode = event.which || event.keyCode;
      const charStr = String.fromCharCode(charCode);
      const regex = /^[a-zA-Z\s]*$/; // Regular expression to allow only alphabets and spaces
  
      if (!regex.test(charStr)) {
        setValid(false);
        event.preventDefault();
      } else {
        setValid(true);
      }
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Enter only alphabets and spaces"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ borderColor: valid ? 'green' : 'red' }}
        />
        {!valid && <p style={{ color: 'red' }}>Only alphabets and spaces are allowed!</p>}
      </div>
    );
}

export default KeyDownComponent;
