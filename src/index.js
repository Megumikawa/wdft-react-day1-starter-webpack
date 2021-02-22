// const React = require('react')
/*
import {age, friend }  from './data.js'
import someValue from './data.js'
console.log(age)
console.log(someValue)
*/

import React from 'react'
import ReactDOM from 'react-dom'
// Inlclude styles of Bulma
import 'bulma/css/bulma.css'
import './style.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import FooterClass from './components/FooterClass.js'
import Button from './components/Button'


class App extends React.Component {
    render(){
        return (
            // Using React.Fragment so that we have an enclosing tag for this component
            <React.Fragment>
                {/* Passing props to this component */}
                <Button name="Secondary"/>


                {/* Passing props for a class component */}
                <FooterClass title="Hey footer" />

                {/* Rendering some bulma code. Ideally you must put this in it's own component same as how we did for the Button */}
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                        </figure>
                    </div>
                </div>
                <Header className="myClass" />

                {/* Passing children as props */}
                <Footer> 
                    <h1>OMG, I'm Lost</h1> 
                </Footer>

                {/* Passign simple and boolean props */}
                <Footer title="Hey footer" cindy />

                  {/* Passign simple  props */}
                <Footer title="Copyrights" anotherTitle="Trademark" />
            </React.Fragment>
        )
    }
}


// We do this just once in our whole project in the root file
ReactDOM.render( <App /> , document.querySelector('#myApp') )