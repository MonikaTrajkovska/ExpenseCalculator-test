import React from 'react'
import './Login.css'
import './Shared.css'

const Login = ()=> {
    return (
        <React.Fragment>
             <div id="login">
        <div className="box-container">
            <form>
                <p className="input-container">
                    <label className="text-field-input">E-mail</label>
                    <input type="text" className="text-field"/>
                </p>
                <p className="input-container">
                    <label className="text-field-input">Password</label>
                    <input type="password" className="text-field" />
                </p>
                <button className="primary-button">Sign in</button>
            </form>
        </div>
        <div className="additional-info">Or if you don't have an account,<a href="#">Register</a></div>
    </div>

        </React.Fragment>
    )
}
export default Login