//import logo from './logo.svg';
//import './App.css';


import MyFourthComponent from "./MyFourthComponent";
import MyThirdComponent from "./MyThirdComponent";


import MyFirstComponent from "./MyFirstComponent";
import MySecondComponent from "./MySecondComponent";

function App() {
  const name = " RUSHABH";

  return (
    <>
      <h1> HELLO {name && name.length ? name : "World"} </h1>
      <>
      <MyFirstComponent parentComponentName={"App"}/> 
      </>
      <>
      <MySecondComponent parentComponentName={"App"}/> 
      </>
      
       {/* <MyFirstComponent />z
     <MySecondComponent />  */}

      <MyThirdComponent name ={name} age={25}> 
      <h2> ITS MyThirdComponenet called from app</h2>
      </MyThirdComponent>

      <MyFourthComponent name ={name} age={29}> 
      <h2> ITS MyForthComponenet called from app</h2>
      </MyFourthComponent>

      
      
      
    </>
  );
};

export default App;
