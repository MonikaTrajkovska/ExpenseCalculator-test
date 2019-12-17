import uuid from 'uuid'


const initialState={
   
    items:[
        {id:uuid(), 
      product_name:"Coca cola",
      product_type:"Drink",
      product_descrition:"Unhealthy",
      purchase_date:"12.08.2019",
      product_price:"75"
     },
     {id:uuid(), 
      product_name:"Fanta",
      product_type:"Drink",
      product_descrition:"Unhealthy",
      purchase_date:"10.08.2018",
      product_price:"60"
     },
      ]
}
export default function(state=initialState,action){
switch(action.type){
    case "GET_ITEMS":
        return{
            ...state
        }
        default:
            return state
}
}