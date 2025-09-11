import React from 'react'
import useWidth from '../../src/Hook/useWidth'

const customhook = () => {
    const {count , imcrement, decrement, rest} = useWidth (0)
  return (
    <>
    <div>{count}</div>
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <button onClick={imcrement}>plus</button>
       <button onClick={decrement}>less</button>
         <button onClick={rest}>rest</button>
         </div>
    </>
  )
}

export default customhook