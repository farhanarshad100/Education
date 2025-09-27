
import  { useReducer, } from "react";
const initialSatet = {count: 0}
const couterreducer = (state, action) =>{
switch(action.type){
    case "Increment":
        return{count:state.count + 1};
    case "decrement":
        return{count: state.count - 1};
        default:
            return state;
}
}


const usereducer = () => {
    const [state, dispatch] = useReducer(couterreducer, initialSatet)
    return (
        <>
           <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({type: "Increment"})}>+</button>
        <button onClick={() => dispatch({type:"decrement"})}>_</button>
        </>
    )
}
export default usereducer