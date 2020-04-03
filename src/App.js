import React from "react";
import "./App.css";
const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ["/", "*", "-", "+", "="];

const App = () => (
  <div className="calculator">
    <div id="display" className="display">
      <div>1500 </div>
      <div className="nums-container">
        {nums.map(num => (
          <button className={`dark-grey ${num === 0 && "big-h"}`} key={num}>
            {num}
          </button>
        ))}
      </div>
      <div classname="ops-container">
        {ops.map(op => (
          <button className="orange" key={op}>
            {op}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default App;
