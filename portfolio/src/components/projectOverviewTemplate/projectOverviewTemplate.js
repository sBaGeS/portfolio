import React, { useState } from 'react';
import "./projectOverviewTemplate.css"
import project1 from "../../pictures/project1.png"
import project2 from "../../pictures/project2.png"
import project3 from "../../pictures/project3.png"
import { useNavigate } from 'react-router';


export default function ProjectTemplate() {

    let navigate = useNavigate();

    function handleGithubClicked(project_id){
       if (project_id == 1){
        window.location.href=("https://github.com/sBaGeS/cabinProject");
       }
       else if (project_id == 2){
        window.location.href=("https://github.com/sBaGeS/travian_bot");
       }
    }

    function handleNavigation(project_id){
       if(project_id == 1){
        navigate("/user/pauli.kemppainen/project1");
       }
       if(project_id == 2){
        navigate("/user/pauli.kemppainen/project2");
       }
       if(project_id == 3){
        navigate("/user/pauli.kemppainen/project3");
       }
    }

        return (
            <div id="templateGrid">
                <div className='grid_item'>
                <a className="projectButton" onClick={e => handleNavigation(1)}><img src={project1} className="projectPhoto"/></a>
                <a onClick={e => handleNavigation(1)} className="project_title"><h2>Mökkien vuokraus nettisivu</h2></a>
                <a>Savonia Code Academyn lopputyönä toteutettu nettisivu jossa käyttäjä voi vuokrata 
                muiden käyttäjien lisäämiä mökkejä ja muita lisäpalveluita.</a>
                <br/>
                <button className='githubButton' onClick={e =>handleGithubClicked(1)}>Projektin github sivu</button>
                </div>

                <div className='grid_item'>
                <a className="projectButton" onClick={e => handleNavigation(2)}><img src={project2} className="projectPhoto"/></a>
                <a onClick={e => handleNavigation(2)} className="project_title"><h2>Travian botti</h2></a>
                <a>Verkkoselainpeliä traviania varten tekemäni botti joka pelaa peliä puolestani.</a>
                <br/>
                <button className='githubButton' onClick={e =>handleGithubClicked(2)}>Projektin github sivu</button>
                </div>

                <div className='grid_item'>
                <a className="projectButton" onClick={e => handleNavigation(3)}><img src={project3} className="projectPhoto"/></a>
                <a onClick={e => handleNavigation(3)} className="project_title"><h2>Elorating systeemi CS:GO peliin</h2></a>
                <a>Eloluvun avulla toteutettu systeemi Counterstrike Global Offensive pelin ammattilaispelaajien ja 
                tiimien taitotason vertailuun.
                </a>
                <br/>
                <br/>
                <a>En ole julkaissut tätä projektia githubiin.
                </a>
                </div>
            </div>
        )
}