import {createStore} from "redux"; 
import {combineReducers,applyMiddleware} from "redux";//,compose 
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";


import titlereducer from "./reducer/titlereducer";
import listreducer from "./reducer/listreducer";

// const testreducer = (prevState=[],data={})=>{
//  //prevstate 上一次的状态
//  //data ,{title:"aaaaaaa"}  {type:"changetit",payload:"wo "}

//  console.log(data);  // {type:"changelist",data:11111}


//     let {type , payload} = data;//ES6 解构  

//     switch(type){
//      case "changelist":
//          return [...prevState,payload]
//      default:
//          return prevState
//     }
//  // return data.payload;
// }



var reducer = combineReducers({
    titlereducer,
    listreducer
})


const store = createStore(reducer,applyMiddleware(thunk,promiseMiddleware)); //applyMiddleware 应用中间件


 // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 // const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
 //    applyMiddleware(thunk,promiseMiddleware)
 //  ));




export default store;

