        
import React, { useState } from 'react';

function Home() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString()); // WARNING: eval is unsafe for untrusted input
    } catch {
      setInput('Error');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly style={{ width: '200px', fontSize: '20px' }} />
      <div style={{ marginTop: '10px' }}>
        {['1', '2', '3', '+'].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        <br />
        {['4', '5', '6', '-'].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        <br />
        {['7', '8', '9', '*'].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        <br />
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <br />
        <button onClick={handleClear} style={{ marginTop: '10px' }}>Clear</button>
      </div>
    </div>
  );
}

export default Home;
