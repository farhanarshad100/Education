import { useState } from "react"

const useToggle = (startValue = false) =>{
    const [value , setValue] = useState(startValue)
    const toggle = () => useToggle (!value)
return [value, toggle]
}
export default useToggle