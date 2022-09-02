import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import ProjectTemplate from './components/projectOverviewTemplate/projectOverviewTemplate.js';

function App() {
  return (
    <div>
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/all_projects" element={<ProjectTemplate />}></Route>
   </Routes>
   </BrowserRouter>
   </div>
  );
}


export default App;
