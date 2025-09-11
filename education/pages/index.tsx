import TaskManager from '@/Component/Task/TaskManager';

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


// const myprmise = new Promise((resolved, rejected) => {
//   const a = 2;
//   const b = 4;
//   const c = a + b;
//   if (c === 4) {
//     resolved('if resoleved match okay');
//   } else {
//     rejected('no it is not macting');
//   }
// });

// myprmise
//   .then(m => {
//     console.log(m);
//   })
//   .catch(m => {
//     console.log(m);
//   });

// const p = new Promise ((resolve, rejects) =>{
//   setTimeout(() =>{
//   const a = 1 + 2;
//   if (a  === 2){
//     resolve ('done')
//   }else(
//     rejects ('found')
//   )
// }, 4000);
//   })

// p.then (m =>{
//   console.log("if find true show massage"+ m)
// }).catch( m =>{
//     console.log("it is not " + m)
// })



const p = new Promise ((resolve, rejects) =>{
  console.log("Promise is pending...")
  setTimeout(() =>{
    resolve(" after 5 second")
  }, 5000)
})

p.then((m) =>{
  console.log("done" + m)
}).catch((m) =>{
  console.log("not found" + m)
})

// call back function

const newTest = (a, b, opretion) =>{
  return opretion (a, b)
} 

newTest(3, 4, function (num1 , num2){
return num1 + num2;
})
console.log()



  return (
    <div>

      <TaskManager/>
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
