
// import './App.css';
// import ConditionalComponent from './ConditionalComponent';
import FormComponent from './FormComponent';
import ListComponent from './ListComponent';
import PersonFormComponent from './PersonFormComponent';
// import FalseComponent from './FalseComponent';
// import TrueComponent from './TrueComponent';
// import MySecondParentsClass from './MySecondParentsClass';
function App() {
  //const name="Rushabh";
  return (
     <div className="App">
    {/* <MySecondParentsClass/> */}               
    <h1> from app</h1>
{/* 
    {name ==="Rushabh" ? <TrueComponent/>:<FalseComponent/>}
    {name==="Rushabh" && <TrueComponent/>} */}

    {/* <ConditionalComponent/> */}
    {/* <ListComponent/> */}
    {/* <FormComponent/> */}
    <PersonFormComponent/>
    </div>
    
  );
};

export default App;
