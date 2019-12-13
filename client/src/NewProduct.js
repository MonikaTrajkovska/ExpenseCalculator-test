import React from 'react'
import './New Product.css'
const NewProduct = ()=> {
    return (
        <React.Fragment>
       
    
      <h3>New Product</h3>
      <div id="login2">
            <div className="box-container2">
                <form>
                    <p className="input-container2">
                        <label className="text-field-input2">Product name</label>
                        <input type="text" className="text-field2" />
                    </p>
                    <p className="input-container2">
                        <label className="text-field-input2">Product description</label>
                        <input type="text" className="text-field2" />
                    </p>
                    <p className="input-container2">
                        <label className="text-field-input2">Product type</label>
                        <input type="email" className="text-field2" />
                    </p>
                    <p className="input-container2">
                        <label className="text-field-input2">Purchase date</label>
                        <input type="text" className="text-field2" />
                    </p>
                    <p className="input-container2">
                        <label className="text-field-input2">Product price</label>
                        <input type="number" className="text-field2" />
                    </p>
                   
                    <button className="primary-button2">Create product</button>
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
export default NewProduct