
// import './App.css';
// import ConditionalComponent from './ConditionalComponent';
import ListComponent from './ListComponent';
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
    <ListComponent/>
    </div>
    
  );
};

export default App;
