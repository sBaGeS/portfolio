import React, { useState } from 'react';
import "./projectOverviewTemplate.css"
import pictureDemo from "../../pictures/kuvaDemo.png"
import project1 from "../../pictures/project1.png"



export default function ProjectTemplate() {

    function handleGithubClicked(project_id){
       if (project_id == 1){
        window.location.href=("https://github.com/sBaGeS/cabinProject");
       }
    }

        return (
            <div id="templateGrid">
                <div className='grid_item'>
                <a href="project1"><img src={project1} className="projectPhoto" href="project1"/></a>
                <a href="project1"><h2>Mökkien vuokraus nettisivu</h2></a>
                <a>Savonia Code Academyn lopputyönä toteutettu nettisivu jossa käyttäjä voi vuokrata 
                muiden käyttäjien lisäämiä mökkejä.</a>
                <br/>
                <button className='githubButton' onClick={e =>handleGithubClicked(1)}>Projektin github</button>
                </div>

                <div className='grid_item'>
                </div>
                <div className='grid_item'>
                </div>
                <div className='grid_item'>
                </div>
                <div className='grid_item'>
                </div>
                <div className='grid_item'>
                </div>
                <div className='grid_item'>
                </div>
                <div className='grid_item'>
                </div>
                <div className='grid_item'>
                </div>
                <div className='grid_item'>
                </div>
                <div className='grid_item'>
                </div>
                <div className='grid_item'>
                </div>
            </div>
        )
}