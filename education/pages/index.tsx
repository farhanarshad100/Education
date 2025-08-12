import React, { useEffect, useState } from 'react';

function StatusComponent() {
const isLoggedIn = true;
const nameUpdate = ""

// map 
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map (n => n * 2);
console.log(double)


const newNumber = [2,3,4,5,6];
const changeNumber = newNumber.map(h => h * 2 )
console.log(changeNumber)

// filter remove unwanted value


const filterNumber = [1,2,3,4];
const test = filterNumber.filter(n => n % 3 === 0);
console.log(test)


const people = [
  { id: 1, name: "Farhan", age: 28, city: "Delhi" },
  { id: 2, name: "Monu", age: 25, city: "Mumbai" },
  { id: 3, name: "Yasmin", age: 22, city: "Kolkata" },
  { id: 4, name: "Arshad", age: 30, city: "Bangalore" },
];


  return (
    <div>
      <h2>Status:</h2>
      
    {isLoggedIn ? <p>Hello Farhan1</p> : <p>please show name</p>}
  {/* <h1>{nameUpdate ? `Hello, ${nameUpdate}`: `Hello guest`}</h1> */}

<h1>Hello, {nameUpdate ? nameUpdate : "Guest"}</h1>

{/* <p key={number}>Doubled: {number * 2}</p> */}
 {double}

<ul>
{people.map(user =>(
<li key={user.id}>
  <span>name{user.name}</span>
</li>
))}
</ul>


    </div>
  );
}

export default StatusComponent;
