import React from "react";

const MetricCard = ({title, value, color}) =>{
return(
    <div style={{
        borderRadius:"10px",
        padding:"20px",
        background:color,
        textAlign:"center",
        flex:"1"
    }}
    >
<h3>{title}</h3>
<h2>{value}</h2>

    </div>
)
}
export default MetricCard;