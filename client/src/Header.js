import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <React.Fragment>
         
         <header>
        <nav className="nav3">
            <div className="buttons3">
                <a href="products.html"><button className="main-buttons3" id="products-btn3">Products</button></a>
                <a href="../Expenses/Expenses.html"><button className="main-buttons3" id="expenses-btn3">Expenses</button></a>
            </div>
            {/* <div className="picture3">              
                    <p><img id="profile3" src="../../assets/images/profile.png.png" alt="profile"> Gal Gadot </img></p>
            </div> */}
        </nav>
        </header> 



        </React.Fragment>


    )
}

export default Header