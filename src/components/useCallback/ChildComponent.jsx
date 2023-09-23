import React, { useEffect, useState } from 'react';

const ChildComponent = (props) => {

  const [items, setItems] = useState([]);
  const { getItems } = props;

  useEffect(() => {
    setItems(getItems())
    console.log("useEffect Called")
  }, [getItems]);


  return (
    <div>
      { items.map((item, key) => <p key={key} >{item}</p>)}
    </div>
  )
}

export default ChildComponent;