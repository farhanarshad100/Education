import React from 'react'

const index = () => {
    {/* Passing Arguments */}
    const shoot = (a) =>{
        alert(a);
    }
  return (
    <div>
<button onClick={() => shoot("Goal")}>Click</button>

    </div>
  )
}

export default index