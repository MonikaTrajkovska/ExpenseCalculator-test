import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './Products.css'

const Products = ()=> {
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
export default Products