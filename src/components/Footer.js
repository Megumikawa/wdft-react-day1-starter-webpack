import React from 'react'

function Footer(props) {
    /*
            In functional components you will always get the props in the function parameter (whatever you name it)
         */

    /*
        props = {
        className: "myClass"
        manish: "Hey footer",
        anotherTitle: "Trademark" 
        cindy: true 
        children: '<h1>OMG, I'm Lost</h1>'
        }
    */

    let classValue = props.different ? 'someClass': 'anotherClass'

    /*
        In JSX if you want to use JavaScript use the {} brackets
    */

    return (
        <footer >
            {props.children}
            { props.title}
            <h1 >{props.anotherTitle}</h1>
        </footer>
    )
}

export default Footer