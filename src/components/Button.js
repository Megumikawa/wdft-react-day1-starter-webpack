import React from 'react'

function Button(props) {

    /*
    If you want to use custom classes, always think about props
    Use the {} to render anything dynamic in your JSX
    */
 
    return (
        <div>
            <div className="buttons">
                <button className="button is-primary">{props.name}</button>
            </div>
        </div>
    )
}

export default Button