// Please import this line at the top of fucntional components as well 
import React from 'react'

function Header (){

    // Conditionally render classes
    // Note this is a hint for the lab if you're reading this.
    // If you've understood how props work this would be easy peassy
    let myClass = props.className ? props.className : 'title'
    
    return (
        <div>
            <div className={myClass} >React Works</div>
            <h1>Another heading</h1>
        </div>
    )
}

export default Header