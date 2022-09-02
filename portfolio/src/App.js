import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';

function App() {
  return (
    <div>
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}></Route>
   </Routes>
   </BrowserRouter>
   </div>
  );
}


export default App;
