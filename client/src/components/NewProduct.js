
import React from 'react'
import './New product.css'
import {connect} from 'react-redux'
import {addItem} from '../actions/itemActions'
import uuid from 'uuid'


class NewProduct extends React.Component{
    state={
        modal:false,
        product_name:'',
        product_type:'',
        product_description:'',
        purchase_date:'',
        product_price:''
    }
    toggle=()=>{
        this.setState({
            modal:!this.state.modal
        })
    }
//      onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
    onSubmit=e=>{
        e.preventDefault()
        const newItem={
            id:uuid(),
            product_name:this.state,
            product_type:this.state,
        product_description:this.state,
        purchase_date:this.state,
        product_price:this.state
        }
        this.props.addItem(newItem)
        this.toggle()
    }
    render(){
        return(
           
                  <React.Fragment>
                
       <h3 >New Product</h3>
      
       <div id="login2">
            <div className="box-container2">
                <form onSubmit={this.onSubmit}>
                     <p className="input-container2">
                         <label className="text-field-input2" >Product name</label>
                         <input type="text"  product_name="product_name" id="product_name" onChange={this.onChange} className="text-field2" />
                     </p>
                     <p className="input-container2">
                         <label className="text-field-input2" >Product description</label>
                         <input type="text" product_description="product_description" id="product_description" onChange={this.onChange} className="text-field2"  />
                     </p>
                     <p className="input-container2">
                         <label className="text-field-input2" >Product type</label>                        
                          <input type="text" product_type="product_type" id="product_type" onChange={this.onChange} className="text-field2" />
                    </p>
                     <p className="input-container2">
                        <label className="text-field-input2"  >Purchase date</label>
                        <input type="text" purchase_date="purchase_date" id="purchase_date" onChange={this.onChange} className="text-field2" />
                    </p>
                    <p className="input-container2">
                        <label className="text-field-input2"  >Product price</label>
                         <input type="number" product_price="product_price" id="product_price" onChange={this.onChange} className="text-field2" />
                    </p>
                    <div>
                <button className="primary-button2" onClick={this.toggle}>Create product</button> 
            </div>
        
                    
                     </form>
                     </div>
                    
                    <div className="new2"> 
                        <p><i className="fas fa-plus-circle"></i></p>
                        <p>You are creating new product</p>
                   </div>
                </div>
                    
                </React.Fragment>
                           
                    
        
     )
      } 
          
    }
    


 const mapsStateToProps=state=>({
     item:state.item
 })



 export default connect(mapsStateToProps,{addItem})(NewProduct)
// import React from 'react'



// import './New Product.css'
// const NewProduct = ()=> {
//     return (
//         <React.Fragment>
       
    
//       <h3>New Product</h3>
//       <div id="login2">
//             <div className="box-container2">
//                 <form>
//                     <p className="input-container2">
//                         <label className="text-field-input2">Product name</label>
//                         <input type="text" className="text-field2" />
//                     </p>
//                     <p className="input-container2">
//                         <label className="text-field-input2">Product description</label>
//                         <input type="text" className="text-field2" />
//                     </p>
//                     <p className="input-container2">
//                         <label className="text-field-input2">Product type</label>
//                         <input type="email" className="text-field2" />
//                     </p>
//                     <p className="input-container2">
//                         <label className="text-field-input2">Purchase date</label>
//                         <input type="text" className="text-field2" />
//                     </p>
//                     <p className="input-container2">
//                         <label className="text-field-input2">Product price</label>
//                         <input type="number" className="text-field2" />
//                     </p>
                   
//                     <button className="primary-button2">Create product</button>
//                     </form>
//                     </div>
//                     <div className="new2"> 
//                         <p><i className="fas fa-plus-circle"></i></p>
//                         <p>You are creating new product</p>
//                    </div>
//                 </div>
                    
//                     </React.Fragment>
                    
                    
        
//     )
// }
// export default NewProduct