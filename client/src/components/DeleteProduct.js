 import React from 'react'
 import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
 import './DeleteProduct.css'
 import { connect } from 'react-redux';
import { deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class  DeleteProduct extends React.Component {
    state = {
      modal: false
      
    };
  
    // static propTypes = {
    //   isAuthenticated: PropTypes.bool
    // };
  
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    };
  
    onChange = e => {
      this.setState(  [e.target.value]);
    };
  
    onSubmit = e => {
      e.preventDefault();
  
    //   const newItem = {
    //     name: this.state.name
    //   };
  
    //   // Add item via addItem action
    //   this.props.addItem(newItem);
  
      // Close modal
      this.toggle();
    };
  
    render() {
      return (
        <div>
         
            <Button onClick={this.toggle} >
              Delete Item
            </Button>
          
       <Modal isOpen={this.state.modal} toggle={this.toggle}>
    onSubmit={this.onSubmit}>
               
                
                  <Button >
                    Delete Item
                  </Button>

    
                  <h3>Delete Product</h3>
         <p>You are about to delete this product.Are you sure you wish to continue?</p>
 <div className="alert-btn6">
             <button className="cancel-btn6">Cancel</button>
             <button className="delete-btn6">Delete</button>
         </div>

                  </Modal>
                  </div>
                    
              
    
   
    
    
      )}
      }
          
      

  const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(
    mapStateToProps,
    { deleteItem }
  )(DeleteProduct);


// const DeleteProduct= ()=>{
//     return(
//         <React.Fragment>
//              <div className="modal6">
        
//         <h3>Delete Product</h3>
//         <p>You are about to delete this product.Are you sure you wish to continue?</p>
// <div className="alert-btn6">
//             <button className="cancel-btn6">Cancel</button>
//             <button className="delete-btn6">Delete</button>
//         </div>
//     </div>
    
//         </React.Fragment>
//     )
// }



// export default DeleteProduct