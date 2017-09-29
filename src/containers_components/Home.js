import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as AUTH from '../utils/auth'
import * as AUTH_API from '../APIs/auth'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    handleLogout(e) {
        e.preventDefault()

        let _this = this
        AUTH_API.Logout()
            .then((res) => {
                if (res.success) {
                    _this.props.logoutSuccess()
                }
            })
            .catch()
    }

    render() {
        console.log(JSON.stringify(this.props.auth))
        var isLoggedIn = AUTH.isLoggedIn(this.props.auth)
        let link = (isLoggedIn) ? <a href="#logout" onClick={this.handleLogout.bind(this)}>Logout</a> : <Link to="/login">Login</Link>
        return (
            <div>
                <h1>HOME</h1>
                {isLoggedIn ? 'Welcome ' + this.props.auth.username + ' ' : 'You have to '} {link}
            </div >
        );
    }
}