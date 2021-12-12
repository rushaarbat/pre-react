import logo from './logo.svg';
import './App.css';
import NormalProp from './NormalProp';
import Incrementer from './Incrementer';
import Increment from './Increment';
import NewIncrement from './NewIncrement';
import Decrementer from './Decrementer';
import Decrement from './Decrement';
import NewDecrement from './NewDecrement';
import DemoComponent from './DemoComponent';

function App() {
  return (
    <div className="App">
      {/* <NormalProp render={(someValue) =>{
        return "old Name  "  +someValue;
      }}/>

      <Incrementer 
      render ={(value, onClickHandler) =>{
        return < Increment value={value} onClickHandler={onClickHandler} />
      }}/>

      <Incrementer 
      render ={( value, onClickHandeler) =>{
        return< NewIncrement value={value} onClickHandeler={onClickHandeler}/>
      }}/>


      <Decrementer 
       render ={(value, onNewClickHandeler) =>{
        return <Decrement value={value} onNewClickHandeler={onNewClickHandeler} />;
      }}/>

<Decrementer 
       render ={(value, onNewClickHandeler) =>{
        return < NewDecrement value={value} onNewClickHandeler={onNewClickHandeler} />;
      }}/> */}


      <DemoComponent/>
    </div>
  );
}

export default App;
