import React from 'react'

const index = () => {

for(var i=0; i<=10;i++){
console.log(i)


setTimeout(function(){
console.log(i)
}, 0);
}


 const Welcome = ({isLoggedIn}) =>{
    if(isLoggedIn){
        return<h1>Hello</h1>
    }else{
        return<h2>False</h2>
    }
 }


  return (
    <div>
        <Welcome isLoggedIn="false"/>
    </div>
  )
}

export default index