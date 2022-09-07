import React, { useState } from 'react';
import "./Profile.css"
import {AiOutlineFileWord, AiOutlineFileExcel, AiOutlineHtml5} from "react-icons/ai";
import {FaRegFilePowerpoint, FaNodeJs, FaReact} from "react-icons/fa";
import {SiJavascript, SiCsswizardry, SiMysql} from "react-icons/si";


export default function Profile() {

        return (
            <div id="profileRoot">
            <div className="float-container">
             <div id="koulutus" className='float-child'>
             <h2 className='title'>Koulutus</h2>
             <a className="text">Peliohjelmoinnin insinööri. Kaakkois-Suomen ammattikorkeakoulu, Kotka 2022 - 2026.</a>
             <br/>
             <a className="text">Savonia Code Academy. Savonia-ammattikorkeakoulu, Kuopio 2020.</a>
             <br/>
             <a className="text">Tietoliikennetekniikan perustutkinto. Savon ammattiopisto, Kuopio 2019.</a>
             </div>
             <div id="tekninen_osaaminen" className="float-child">
             <h2 className='title'>Tekninen osaaminen</h2>

             <div id="osaaminen_gridContainer">
             <div className='osaaminen_item'>
            <h4><AiOutlineFileWord/>Word</h4>
            </div>

            <div className='osaaminen_item'>
            <h4><FaRegFilePowerpoint/>Powerpoint</h4>
            </div>

            <div className='osaaminen_item'>
            <h4><AiOutlineFileExcel/>Excel</h4>
            </div>

            <div className='osaaminen_item'>
            <h4><SiCsswizardry/>CSS</h4>
            </div>

            <div className='osaaminen_item'>
            <h4><AiOutlineHtml5/>HTML</h4>
            </div>

            <div className='osaaminen_item'>
            <h4><SiJavascript/>Javascript</h4>
            </div>

            <div className='osaaminen_item'>
            <h4><FaNodeJs/>Nodejs </h4>
            </div>

            <div className='osaaminen_item'>
            <h4><SiMysql/>SQL</h4>
            </div>
  
            <div className='osaaminen_item'>
            <h4><FaReact/>React</h4>
            </div>

            <div className='osaaminen_item'>
            <h4></h4>
            </div>

            <div className='osaaminen_item'>
            <h4></h4>
            </div>

            <div className='osaaminen_item'>
            <h4></h4>
            </div>

            </div>
                
             </div>
             <div id="harrastukset" className='float-child'>
             <h2 className='title'>Harrastukset ja mielenkiinnon kohteet</h2>
             <a className="text">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a>
             </div>
            </div>
            </div>
        )
}