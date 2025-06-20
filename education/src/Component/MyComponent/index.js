

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: "Welcome to the Class Component"
//     };
//   }

import { Component as base, Component } from "react"

//   render() {
//     return (
//       <div>
//         <h2>{this.state.message}</h2>
//         <p>This is coming from a class component.</p>
//       </div>
//     );
//   }
// }

// export default MyComponent;








// class InterComponent extends Component{
//     render(){
//         return(
//             <>
//                    <h1>Hello</h1>
//         <h2>This class component</h2>
//             </>
     
//         )
//     }
// }
// export default InterComponent


 // import React from "react"
const Person = {
    name: "Farhan",
    age: 30,
    address: "Delhi"

}


 class MyComponent extends Component {
    render(){
        return(
            <>
            <h1>Hello {`${Person.name}, age: ${Person.age}, My address: ${Person.address}`}</h1>
            </>
        )
    }
 }

 export default MyComponent