import logo from './logo.svg';
import './App.css';
import ClassComponentConversion from './ClassComponentConversion';
import FunctionComponent from './FunctionComponent';
import OnlineOrders from './OnlineOrders';
import OfflineOrders from './OfflineOrders';

function App() {
  return (
    <div className="App">
      {/* <ClassComponentConversion/>
      <FunctionComponent/> */}
      <OnlineOrders/>
      <OfflineOrders/>
    </div>
  );
}

export default App;
