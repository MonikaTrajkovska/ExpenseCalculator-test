import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './Expenses.css'
const Expenses = ()=>{
    return(
        <React.Fragment>
             <h3>Expenses</h3>
  <div className="expense4">
  <button className="monthly-btn4">Monthly</button>
  <button className="yearly-btn4">Yearly</button>
  
  <label  id="filter4">Choose Month: 
    <select id="filter4">
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>Octomber</option>
        <option>November</option>
        <option>Decembar</option>
    </select>
  </label>
  
</div>
        
        
        <table className="data4">
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
        <div className="total-spent4">
            <p >Total spent:1205 den.</p>

        </div>
        </React.Fragment>
    )
}



export default Expenses