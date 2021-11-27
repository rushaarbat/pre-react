import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <h1> From App </h1>
     
     <Header/>
     <Navbar/>
     <Body/>
     <Footer/>
  
    </div>
  );
}

export default App;
