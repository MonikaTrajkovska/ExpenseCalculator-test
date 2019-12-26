import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {connect } from 'react-redux'
import './Products.css'
// import uuid from 'uuid'
import {getItems, deleteItem} from '../actions/itemActions'
import PropTypes from 'prop-types'
// import './DeleteProduct.css'

class Products extends React.Component{
  constructor() {
    super();
    this.state = {
      showModal: null
    };
  }

  componentDidMount(){
    this.props.getItems()
  }

  deleteItems=(_id)=>{
    this.setState({
      showModal:(
        <React.Fragment>
<h3>Delete Product</h3>
        <p>You are about to delete this product.Are you sure you wish to continue?</p>
<div className="alert-btn6">
            <button className="cancel-btn6" onClick={() => this.setState({ showModal: null })} >Cancel</button>
            <button className="delete-btn6" onClick={() => this.props.deleteItem(_id)}>Delete</button>
        </div>

    </React.Fragment>
      )
    })
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
{this.state.showModal}
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
    {items.map(({_id , product_name, product_type,product_description,purchase_date,product_price}) =>(  
       
    <tr key={_id} >
    <td>{product_name}</td>
    <td>{product_type}</td>
    <td>{product_description}</td>
   <td>{purchase_date}</td>
   <td>{product_price}</td>
   <td>
                    {/* <a href=""><i className="far fa-edit"></i></a> */}
                    <button onClick={() => this.deleteItems(_id)} >Delete</button> 
                    
         
                </td>
          </tr>
    ))}
          </thead>
         </table>
<Link to="/newproduct">
    <button className="fixed-button5" onClick={this.toggle}>New Product</button>
    </Link>
    
{/*     
        <button className="fixed-button5"
        onClick={()=>{
          const item=prompt("EnterItem")
        if(item){
          this.setState(state=>({
            items:[...state.items,{id:uuid(),product_name,product_type,product_descrition,purchase_date,product_price}]
          }))
        }
        }}
        >New product</button> */}
        
       
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

export default connect(mapStateToProps,{getItems,deleteItem})(Products)


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