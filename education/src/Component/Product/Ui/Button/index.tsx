import React from 'react'

const Button = ({label, color, textColor, borderRadius }) => {
  return (
    <div>
        <button style={{
            background:color,
            border:"1px solid #000",
            color:textColor,
            padding:"20px 20px",
            borderRadius:borderRadius || "2px",
        }}>
            {label}
        </button>

    </div>
  )
}

export default Button