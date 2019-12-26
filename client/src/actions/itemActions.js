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


export const deleteItem=(id)=>{
    return{

        type:"DELETE_ITEM",
        payload:id
    }
}

export const addItem=(item)=>{
    return{

        type:"ADD_ITEM",
        payload:item
    }
}
export const setItemsLoading =()=>{
    return{
        type:"ITEMS_LOADING"
    }
}