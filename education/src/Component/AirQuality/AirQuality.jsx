import { useRef, useState } from "react"

const AirQuality  = () =>{
const [name, setName] = useState()

const inputRef = useRef();
const handleSubmit = () =>{
  alert(inputRef.current.value)
}

  return(
<>
<input type="text" ref={inputRef}
onChange={(e) => setName(e.target.value)}/>
<button onClick={handleSubmit}>Click</button>
<p>My Name is {name}</p>
</>
  )
}




export default AirQuality