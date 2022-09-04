import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import Footer from './components/footer/Footer.js';
import Profile from './components/profile/profile.js';
import ProjectTemplate from './components/projectOverviewTemplate/projectOverviewTemplate.js';

function App() {
  return (
    <div>
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/all_projects" element={<ProjectTemplate />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </div>
  );
}


export default App;
