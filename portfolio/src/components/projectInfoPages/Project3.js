import React, { useState } from 'react';
import "./Project1.css"

export default function Project1() {

        return (
            <div id="projectRoot">
            <div className="float_project">

             <div id="tavoitteet" className='project_child'>
             <h2 id='title_tavoitteet'>Projektin tavoitteet</h2>
             <a className='text_project'>tähän projektin tavoitteet</a>
             </div>

             <div id="videoesittely" className="project_child">
             <h2 id='title_video'>Videoesittely</h2>
                <a className='text_project'>tähän upotettu video</a>
             </div>

             <div id="tekninen_toteutus" className='project_child'>
             <h2 id='title_toteutus'>Tekninen toteutus</h2>
             <a className="text_project">tähän tietoa teknisestä toteutuksesta</a>
             </div>

             <div id="toiminnallisuudet" className='project_child'>
             <h2 id='title_toiminnallisuudet'>Projektin toiminnallisuudet</h2>
             <a className="text_project">tähän tietoa projektin toiminnallisuuksista</a>
             </div>

            </div>
            </div>
        )
}