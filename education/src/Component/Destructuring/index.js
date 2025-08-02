import React, { useState } from "react";

const DestructuringComponent = () => {
  const [count, setCount] = useState(0);
const HandleDecrease = () =>{
    if(count > 0){
        setCount(count - 1)
    }
}

const person = {
 name: "Farhan" ,
 age: 40,
 address: "delhi"
}
const {name, age, address} = person
  return (
    <>
      <h1>Count {count}</h1>
      <button
        className="bg-amber-400 py-2 px-2 rounded-2xl cursor-pointer text-white"
        onClick={() => setCount(count + 1)}
      >
        Click here
      </button>
      <button
        className="bg-green-500 py-2 px-2 rounded-2xl cursor-pointer text-white"
        onClick={HandleDecrease}
        disabled={count === 0}
      >
        Decrease
      </button>
      <button
        className="bg-red-500 py-2 px-2 rounded-2xl cursor-pointer text-white"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
      <p>{person.abc}</p>
        <p>{person.age}</p>
    </>
  );
};

export default DestructuringComponent;
