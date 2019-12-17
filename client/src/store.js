 import { createStore, combineReducers, applyMiddleware,compose } from "redux";
 import logger from "redux-logger";
 import rootReducer from './reducers'
 import thunk from "redux-thunk";


 const initialState={}
 const middleware =[thunk]


 const store = createStore(rootReducer, initialState,compose(
     applyMiddleware(...middleware)


 ))

//  console.log(store.getState());
 export default store;

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import rootReducer from './reducers'
// import thunk from "redux-thunk";

// const initialState = combineReducers({
//   rootReducer,
// });

// const store = createStore(initialState, applyMiddleware(logger, thunk));

// console.log(store.getState());
// export default store;