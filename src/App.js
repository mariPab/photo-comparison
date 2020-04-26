import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider';
import before from './images/before.jpeg';
import after from './images/after.jpeg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <BeforeAfterSlider
        before={before}
        after={after}
        width={640}
        height={480}
      />
    </div>
  );
}

export default App;
