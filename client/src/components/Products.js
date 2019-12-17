import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {connect } from 'react-redux'
import './Products.css'
import uuid from 'uuid'
import {getItems} from '../actions/itemActions'
import PropTypes from 'prop-types'

class Products extends React.Component{
  componentDidMount(){
    this.props.getItems()
  }

  render(){
  const {items}=this.props.item
  
  return(
    
    <React.Fragment>
    <div className="main-div5">
    <h3>Products</h3>
<label>Filter by: 
<select id="filter5">
<option>Year</option>
<option>Highest Price</option>
<option>Lowest Price</option>
<option>Latest Purchases</option>
</select>
</label>
</div>
    <table className="data5">
   
    <thead>
    <tr>
            <th>Product name</th>
            <th>Product type</th>
            <th>Product description</th>
            <th>Purchase date</th>
            <th>Product price </th>
            <th></th>
            <th></th>
          </tr>
    {items.map(({id , product_name, product_type,product_descrition,purchase_date,product_price}) =>(  
       
    <tr key={id} >
    <td>{product_name}</td>
    <td>{product_type}</td>
    <td>{product_descrition}</td>
   <td>{purchase_date}</td>
   <td>{product_price}</td>
   <td>
                    {/* <a href=""><i className="far fa-edit"></i></a> */}
                    <button onClick={() => {
                    this.setState(state=>
                    ({ items:state.items.filter (item=> item.id !== id)
                      
      }))
                     } }
    
    >Delete</button>
         
                </td>
          </tr>
    ))}
          </thead>
         </table>
  
    
    
        <button className="fixed-button5"
        onClick={()=>{
          const item=prompt("EnterItem")
        if(item){
          this.setState(state=>({
            items:[...state.items,{id:uuid(),product_name,product_type,product_descrition,purchase_date,product_price}]
          }))
        }
        }}
        >New product</button>
        
       
  </React.Fragment>
      
    )  

    } 
}

Products.propTypes={
  getItems:PropTypes.func.isRequired,
   item:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  item:state.item
})

export default connect(mapStateToProps,{getItems})(Products)


{/* const Products = ()=> {
    return (
        <React.Fragment>
            <div className="main-div5">
  <h3>Products</h3>
  <label>Filter by: 
  <select id="filter5">
      <option>Year</option>
      <option>Highest Price</option>
      <option>Lowest Price</option>
      <option>Latest Purchases</option>
  </select>
</label>
</div>
        
        
        <table className="data5">
            <tbody>
          <tr>
            <th>Product name</th>
            <th>Product type</th>
            <th>Product description</th>
            <th>Purchase date</th>
            <th>Product price </th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>Carbonated soft drink</td>
            <td>19.08.2018</td>
            <td>75</td>
            <td>
                    <a href=""><i className="far fa-edit"></i></a>
                    <a href=""><i className="far fa-trash-alt"></i></a>
                </td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>Carbonated soft drink</td>
            <td>19.08.2018</td>
            <td>75</td>
            <td>
                    <a href=""><i className="far fa-edit"></i></a>
                    <a href=""><i className="far fa-trash-alt"></i></a>
                </td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>Carbonated soft drink</td>
            <td>19.08.2018</td>
            <td>75</td>
            <td>
                    <a href=""><i className="far fa-edit"></i></a>
                    <a href=""><i className="far fa-trash-alt"></i></a>
                </td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>Carbonated soft drink</td>
            <td>19.08.2018</td>
            <td>75</td>
            <td>
                    <a href=""><i className="far fa-edit"></i></a>
                    <a href=""><i className="far fa-trash-alt"></i></a>
                </td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>Carbonated soft drink</td>
            <td>19.08.2018</td>
            <td>75</td>
            <td>
                    <a href=""><i className="far fa-edit"></i></a>
                    <a href=""><i className="far fa-trash-alt"></i></a>
                </td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>Carbonated soft drink</td>
            <td>19.08.2018</td>
            <td>75</td>
            <td>
                    <a href=""><i className="far fa-edit"></i></a>
                    <a href=""><i className="far fa-trash-alt"></i></a>
                </td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>Carbonated soft drink</td>
            <td>19.08.2018</td>
            <td>75</td>
            <td>
                    <a href=""><i className="far fa-edit"></i></a>
                    <a href=""><i className="far fa-trash-alt"></i></a>
                </td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>Carbonated soft drink</td>
            <td>19.08.2018</td>
            <td>75</td>
            <td>
                    <a href=""><i className="far fa-edit"></i></a>
                    <a href=""><i className="far fa-trash-alt"></i></a>
                </td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>Carbonated soft drink</td>
            <td>19.08.2018</td>
            <td>75</td>
            <td>
                    <a href=""><i className="far fa-edit"></i></a>
                    <a href=""><i className="far fa-trash-alt"></i></a>
                </td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>Carbonated soft drink</td>
            <td>19.08.2018</td>
            <td>75</td>
            <td>
                    <a href=""><i className="far fa-edit"></i></a>
                    <a href=""><i className="far fa-trash-alt"></i></a>
                </td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>Carbonated soft drink</td>
            <td>19.08.2018</td>
            <td>75</td>
            <td>
                    <a href=""><i className="far fa-edit"></i></a>
                    <a href=""><i className="far fa-trash-alt"></i></a>
                </td>
          </tr>
          </tbody>
        </table>
        <button className="fixed-button5">New product</button>




        </React.Fragment>
    )
}
export default Products */}