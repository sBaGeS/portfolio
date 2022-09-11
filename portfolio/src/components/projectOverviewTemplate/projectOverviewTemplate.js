import React, { useState } from 'react';
import "./projectOverviewTemplate.css"
import project1 from "../../pictures/project1.png"
import project2 from "../../pictures/project2.png"
import project3 from "../../pictures/project3.png"



export default function ProjectTemplate() {

    function handleGithubClicked(project_id){
       if (project_id == 1){
        window.location.href=("https://github.com/sBaGeS/cabinProject");
       }
       else if (project_id == 2){
        window.location.href=("https://github.com/sBaGeS/travian_bot");
       }
    }

        return (
            <div id="templateGrid">
                <div className='grid_item'>
                <a href="project1"><img src={project1} className="projectPhoto"/></a>
                <a href="project1" className="project_title"><h2>Mökkien vuokraus nettisivu</h2></a>
                <a>Savonia Code Academyn lopputyönä toteutettu nettisivu jossa käyttäjä voi vuokrata 
                muiden käyttäjien lisäämiä mökkejä ja muita lisäpalveluita.</a>
                <br/>
                <button className='githubButton' onClick={e =>handleGithubClicked(1)}>Projektin github sivu</button>
                </div>

                <div className='grid_item'>
                <a href="project2"><img src={project2} className="projectPhoto"/></a>
                <a href="project2" className="project_title"><h2>Travian botti</h2></a>
                <a>Verkkoselainpeliä traviania varten tehty botti joka pelaa peliä puolestani.</a>
                <br/>
                <button className='githubButton' onClick={e =>handleGithubClicked(2)}>Projektin github sivu</button>
                </div>

                <div className='grid_item'>
                <a href="project3"><img src={project3} className="projectPhoto"/></a>
                <a href="project3" className="project_title"><h2>Elorating systeemi csgo peliin</h2></a>
                <a>Eloluvun avulla toteutettu systeemi Counterstrike Global Offensive pelin ammattilaispelaajien ja 
                tiimien taitotason vertailuun.
                </a>
                <br/>
                <br/>
                <a>En ole julkaissut tätä projektia githubiin.
                </a>
                </div>

                <div className='grid_item'>
                <a href="project4"><img className="projectPhoto"/></a>
                <a href="project4" className="project_title"><h2>Portfolio</h2></a>
                <a>portfolio</a>
                <br/>
                <button className='githubButton' onClick={e =>handleGithubClicked(4)}>Projektin github sivu</button>
                </div>
            </div>
        )
}