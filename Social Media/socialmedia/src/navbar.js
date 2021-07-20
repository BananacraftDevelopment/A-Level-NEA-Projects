import React, { Component } from 'react'
import './nav.css';
import './index.css'
import history from './history';
import FakeBookLink from "./fakeBookLink.js";

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.props = props;
    }
    linkClicked(e,toRedirect) {
        e.preventDefault()
        console.log(e)
        history.push(toRedirect)
    }
    render() {
        console.log("RENDERING")
        console.log(this.props.globals.isLoggedIn)
        return (
            <div className="navbar">
                <FakeBookLink href="./profile" className="active"> <img id="logo" src="data:image/jpeg;base64,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" alt="a"/></FakeBookLink>
                <FakeBookLink href="./post">New Post</FakeBookLink>
                
                <FakeBookLink href="./">Posts</FakeBookLink>
                <FakeBookLink href="./">Friends</FakeBookLink>
                <FakeBookLink href={this.props.globals.isLoggedIn ?"./logout":"./login"}>{ this.props.globals.isLoggedIn ? <p>Sign out</p>:<p>Log in</p>}</FakeBookLink>
            </div>
        )
    }
}

export default Navbar;
// comment