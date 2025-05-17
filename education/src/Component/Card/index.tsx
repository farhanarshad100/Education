import React from "react";
const Card = ({children, className ="", style = {} }) =>{
    return (
    <div className={`w-1/3 p-4 flex-wrap rounded-2xl ${className} `} style={style}>{children}</div>
)
};
export default Card;