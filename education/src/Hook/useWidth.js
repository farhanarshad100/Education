import { useState } from "react"

const useWidth = (startValue = 0) =>{
  const [count , setCount] = useState (startValue);
  const imcrement  = () => setCount (count + 1);
  const decrement = () => setCount (count > 0 ? count - 1 : 0);

   const rest = () => setCount (0);
  return {count,  imcrement, decrement, rest}
}
export default useWidth


const useCount = (startValue = 0) => {
  const [count , setCount] = useState (startValue)
const increment = () => setCount (count + 1) 

}