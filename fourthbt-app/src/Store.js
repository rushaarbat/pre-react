import { createStore } from "redux";    

//Initial State
const InitialState = {
    counter :0,
};

//reducer
 
const reducer =(state=InitialState,action)=>{
   const { type}=action;
   switch (type){
       case "increment":
       return{
        counter: state.counter+1,
       };
       case "decrement":
        return{
            counter: state.counter-1,
           };
    default:
               return state;

   }
};

//store
const store = createStore(reducer);
 
export default store;