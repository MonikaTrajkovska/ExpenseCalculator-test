import React from 'react'
 import './Register.css'


const Register = ()=> {
    return (
        <React.Fragment>
       
       <div className="login1">
        <div className="box-container1">
            <form>
                <p className="input-container1">
                    <label className="text-field-input1">First name</label>
                    <input type="text" className="text-field1" />
                </p>
                <p className="input-container1">
                    <label className="text-field-input1">Last name</label>
                    <input type="text" className="text-field1" />
                </p>
                <p className="input-container1">
                    <label className="text-field-input1">E-mail</label>
                    <input type="email" className="text-field1" />
                </p>
                <p className="input-container1">
                    <label className="text-field-input1">Date of birth</label>
                    <input type="text" className="text-field1" />
                </p>
                <p className="input-container1">
                    <label className="text-field-input1">Telephone</label>
                    <input type="number" className="text-field1" />
                </p>
                <p className="input-container1">
                    <label className="text-field-input1">Country</label>
                    <input type="text" className="text-field1" />
                </p>
                    <p className="input-container1">
                        <label className="text-field-input1">Password</label>
                        <input type="password" className="text-field1" />
                         </p>
                <button className="primary-button1">Register</button>
                </form>
           
           
           </div>

        
            <div className="additional-info1">Or if you don't have an account,<a href="#">Sign in</a></div>
                        
                       
</div>

        </React.Fragment>
    )
}
export default Register