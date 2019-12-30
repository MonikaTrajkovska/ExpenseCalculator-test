import axios from 'axios'
 

export const getItems=() => dispatch =>{
   dispatch(setItemsLoading())
   axios
   .get("http://localhost:8080/api/v1/items")
   .then(res => 
    dispatch({
        type:"GET_ITEMS",
        payload:res.data
    })
    )
}


export const addItem=(item) =>( dispatch,getState)=>{
   axios
   .post("http://localhost:8080/api/v1/items",item )
   .then(res => 
    dispatch({
        
            type:"ADD_ITEM",
            payload:res.data
        
    })
    
    )
}
export const deleteItem=(id) =>dispatch =>{
   axios.delete (`http://localhost:8080/api/v1/items${id}`).then(res=>{
       dispatch({
        
            type:"DELETE_ITEM",
            payload:id
        
       })
   })

}

export const setItemsLoading =()=>{
    return{
        type:"ITEMS_LOADING"
    }
}