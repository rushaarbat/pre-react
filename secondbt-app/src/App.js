import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HeaderComponent';
import NavbarComponent from './NavbarComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
import { Route, Routes } from "react-router-dom"; 
import PostComponent from './PostComponenet';
import TodoComponent from './TodoComponent';
function App() {
  return (
    <div className="App">
     <HeaderComponent/>
     <NavbarComponent/>
     <Routes>
     <Route path={"/post"} element={<PostComponent />} />
        <Route path={"/todo"} element={<TodoComponent />} />
        <Route path={"/user"} element={<UserComponents />} />

     </Routes>
     
     {/* <FooterComponent/> */}
    </div>
  );
}

export default App;
