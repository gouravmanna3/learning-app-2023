import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallbackDemo = () => {

    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(1);

    // Gets recreated every time component re-renders
    // changing dark value in state also re-creates this function which is passed to ChildComponent
    // Inside child component useEffect re-runs when we change dark value in state.
    const getItems = useCallback(() => {
      return [number, number + 1, number + 2]
    }, [number])

    const theme = {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }

    return (
      <div style={theme}>
        <input 
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))} 
        />
        <button onClick={() => setDark(prevDark => !prevDark)}>
          Toggle theme
        </button>
        <ChildComponent getItems={getItems} />
      </div>
    )
}

export default UseCallbackDemo;