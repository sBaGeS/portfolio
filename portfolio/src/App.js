import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import Footer from './components/footer/Footer.js';
import Profile from './components/profile/Profile.js';
import ProjectTemplate from './components/projectOverviewTemplate/projectOverviewTemplate.js';
import Project1 from "./components/projectInfoPages/Project1.js";
import Project2 from "./components/projectInfoPages/Project2.js";
import Project3 from "./components/projectInfoPages/Project3.js";
import Project4 from "./components/projectInfoPages/Project4.js";

function App() {
  return (
    <div>
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/user/pauli.kemppainen/" element={<Home />}></Route>
    <Route path="/user/pauli.kemppainen/all_projects" element={<ProjectTemplate />}></Route>
    <Route path="/user/pauli.kemppainen/profile" element={<Profile />}></Route>
    <Route path="/user/pauli.kemppainen/project1" element={<Project1 />}></Route>
    <Route path="/user/pauli.kemppainen/project2" element={<Project2 />}></Route>
    <Route path="/user/pauli.kemppainen/project3" element={<Project3 />}></Route>
    <Route path="" element={<Project4 />}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </div>
  );
}


export default App;
