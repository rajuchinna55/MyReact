import React, { useState } from 'react';

function MouseDown() {
  const [bgColor, setBgColor] = useState('lightgray');

  const handleMouseDown = () => {
    setBgColor('lightcoral');
  };

  const handleMouseUp = () => {
    setBgColor('lightgray');
  };

  return (
  <div tyle={{
    height: '1200px',
  }}>
      <div
      style={{
        backgroundColor: bgColor,
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        cursor: 'pointer',
        border: '1px solid #ccc'
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      Click and Hold me!
    </div>
    <p>lore</p>
  </div>
  );
}

export default MouseDown;
