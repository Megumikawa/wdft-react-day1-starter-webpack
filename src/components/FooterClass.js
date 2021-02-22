import React, { Component } from 'react'

class FooterClass extends Component {
    render() {
        /*
            In class components you will always get the props in the keyword `this.props`
         */

        /*
        this.props = {
            title: '"Hey footer'
        }
        */


    /*
        In JSX if you want to use JavaScript use the {} brackets
    */

        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}


export default FooterClass