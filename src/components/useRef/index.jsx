import React, { useState, useRef } from "react";

const UseRefDemo = () => {

  const [name, setName] = useState("");
  const inputRef = useRef("");

  function focus() {
    inputRef.current.focus();
  }
  
  return (
    <>
      <input type="text" ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={focus}>Click</button>
    </>
  )
}

export default UseRefDemo