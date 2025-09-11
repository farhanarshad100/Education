import React from "react";
import useWidth from "../../src/Hook/useWidth";

const customhooktest = () =>{
    const {count, imcrement, decrement } = useWidth ()
    return(
        <>
        <h1>{count}</h1>
        <button onClick={imcrement}>increment</button>
        <button onClick={decrement}>decrement</button>
        </>
    )
}
export default customhooktest