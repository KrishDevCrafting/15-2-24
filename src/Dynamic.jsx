import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [textColor, setTextColor] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setTextColor(e.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={handleInputChange}
      />

      <table className="table">
        <thead>
          <tr>
            <th>User-Value</th>
          </tr>
        </thead>
      </table>
      <h1 className={textColor}>{inputValue}</h1>
    </div>
  );
  
}

export default Input;
