
import React from 'react'

const Computers =()=> {
    return (
        <h1>I like Computers </h1>
    )
}

const Movies= ()=>{
    return (
        <h2>I don't like Movies</h2>
    )
}
function Nested (){
    return (
        <div>
            <Computers />
            <Movies />
        </div>
    )
}
export default Nested