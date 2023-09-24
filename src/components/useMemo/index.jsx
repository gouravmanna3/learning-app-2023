import React, { useState, useMemo, useEffect } from "react";

const UseMemoDemo = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  /* If you don't put the themeStyle inside a useMemo hook, the useEffect below will run whenever 
  the number state value changes. This happens because a new themeStyle is created with every re-render, 
  and even if the actual content inside themeStyle hasn't changed, 
  it appears as if themeStyle itself has changed due to reference euality. */
  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyle]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
        value={number}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

function slowFunction(number) {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
}

export default UseMemoDemo;
