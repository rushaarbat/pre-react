import { createStore } from "redux";        

//Initial State
const initialState={
// personList :[],
courseList:[],
};


//reducer 

// const reducer=(state=initialState,action)=>{
// const { type, payload }= action;
// const personListCopy = [...state.personList];
// switch (type){
// case "PERSON_ADD":
//     console.log(payload);
//     personListCopy.push(payload);
//     console.log(personListCopy);
//    return{
//         personList: personListCopy,

//     };


// case "PERSON_DELET":
//         console.log(payload);
//    personListCopy.splice(payload, 1);
//    alert("Deleted");
//    return{
//        personList:personListCopy,
//    }
//     default:
//     return state
// }
   
    
// };

const reducer=(state=initialState,action)=>{
    const { type, payload }= action;
 const courseListCopy = [...state.courseList];
 switch (type){
case "COURSE_ADD":
console.log(payload);
courseListCopy.push(payload);
    console.log(courseListCopy);
  return{
    courseList: courseListCopy,

    };

    case "COURSE_DELET":
        console.log(payload);
        courseListCopy.splice(payload, 1);
  alert("Deleted");
  return{
    courseList:courseListCopy,
   }
    default:
   return state

}
}

//store
const store = createStore(reducer);

export default store;