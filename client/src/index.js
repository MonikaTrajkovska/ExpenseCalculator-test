import ReactDOM from 'react-dom'
import React from 'react'
import Register from './Register'
import Login from './Login'
import NewProduct from './NewProduct'
import Header from './Header'
import Expenses from './Expenses'
import Products from './Products'
// import DeleteProduct from './DeleteProduct'


 import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

const app= document.getElementById('app')
const Menu =() => {
     return (
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
     )
 }

const Routes = () => {
    return (
<Router>
 <Menu/> 
<Switch>
 <Route exact  path= '/' component={Login} />
<Route  exact path='/Register' component={Register}/>
  {/* <Route exact  path='/newproduct' component={NewProduct}/> 
  <Route exact  path='/header' component={Header}/>   */}
  <Route exact path="/newproduct" render={() => 
                    <React.Fragment>
                        <Header/>
                        <NewProduct/>
                    </React.Fragment>
                }/>

<Route exact path="/expenses" render={() => 
                        <React.Fragment>
                            <Header/>
                            <Expenses/>
                            
                        </React.Fragment>
                    }/> 
              <Route exact path="/products" render={() => 
                        <React.Fragment>
                            <Header/>
                            <Products/>
                            
                        </React.Fragment>
                    }/>   
            {/* <Route exact path="/deleteproduct" render={() => 
                        <React.Fragment>
                          
                            <DeleteProduct/>
                            
                        </React.Fragment>
                    }/>                   */}
{/* <Route exact path='/login' component={Login}/> */}

</Switch>
</Router>



    )
}

ReactDOM.render(<Routes/>, app)
