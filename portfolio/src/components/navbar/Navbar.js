import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../../pictures/logo.png"
import { useNavigate } from 'react-router';
import "./Navbar.css"
import { BsFillPersonFill} from "react-icons/bs";
import { ImHome3, ImStarFull} from "react-icons/im";

export default function Navbar() {
    let navigate = useNavigate();

    function handleProjectClick(){
        navigate("/user/pauli.kemppainen/all_projects");
    }

    function handleProfileClick(){
        navigate("/user/pauli.kemppainen/profile");
    }

    function handleHomeClick(){
        navigate("/user/pauli.kemppainen/");
    }

        return (
            <div>
             <Toolbar className="navbar">
                <button onClick={handleHomeClick} className="button" id="homeButton"> <ImHome3 className="iconSmall"/> Etusivu</button>
                    <img src={logo} id="logo"/>
                    <h1 id="title">Portfolio</h1>
                    <button onClick={handleProfileClick} className="button" id="profileButton"> <BsFillPersonFill className="iconSmall"/>Profiili</button>
                    <button onClick={handleProjectClick} className="button" id="projectButton"> <ImStarFull className="iconSmall"/>Projektit <ImStarFull className="iconSmall"/></button>
                </Toolbar>
            </div>
        )
}