import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import './AppNavBar.css'

const AppNavBar=()=>{
            return(
                <React.Fragment>
                    <h2>Expense Calculator</h2>
                     <div>
                <ul>
            <li>
                <Link to= '/'>Login</Link>
            </li>
             <li>
                 <Link to='/newproduct'>NewProduct</Link>
             </li>
             <li>
                 <Link to='/expenses'>header</Link>
             </li>
             <li>
                 <Link to= '/register'>Register</Link>
             </li>
             <li>
                 <Link to= '/products'>Products</Link>
             </li>
             {/* <li>
                 <Link to= '/deleteproduct'>Delete Product</Link>
             </li> */}
         </ul>
            </div>
            </React.Fragment>
            )}
       
    
 
         


export default AppNavBar