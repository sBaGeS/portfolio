import React, { useState } from 'react';
import "./Profile.css"
import {AiOutlineFileWord, AiOutlineFileExcel, AiOutlineHtml5} from "react-icons/ai";
import {FaRegFilePowerpoint, FaNodeJs, FaReact, FaUnity} from "react-icons/fa";
import {SiJavascript, SiCsswizardry, SiMysql} from "react-icons/si";


export default function Profile() {

        return (
            <div id="profileRoot">
            <div className="float-container">
             <div id="koulutus" className='float-child'>
             <h2 id='title_koulutus'>Koulutus</h2>
             <a className="text">Peliohjelmoinnin insinööri. Kaakkois-Suomen ammattikorkeakoulu, Kotka 2022 - 2026.</a>
             <br/>
             <a className="text">Savonia Code Academy. Savonia-ammattikorkeakoulu, Kuopio 2020.</a>
             <br/>
             <a className="text">Tietoliikennetekniikan perustutkinto. Savon ammattiopisto, Kuopio 2019.</a>
             </div>
             <div id="tekninen_osaaminen" className="float-child">
             <h2 id='title_osaaminen'>Tekninen osaaminen</h2>

             <div id="osaaminen_gridContainer">
             <div className='osaaminen_item'>
            <h4><AiOutlineFileWord/>Word</h4>
            <small>Tyydyttävä</small>
            </div>

            <div className='osaaminen_item'>
            <h4><FaRegFilePowerpoint/>Powerpoint</h4>
            <small>Hyvä</small>
            </div>

            <div className='osaaminen_item'>
            <h4><AiOutlineFileExcel/>Excel</h4>
            <small>Alkeet</small>
            </div>

            <div className='osaaminen_item'>
            <h4><SiCsswizardry/>CSS</h4>
            <small>Hyvä</small>
            </div>

            <div className='osaaminen_item'>
            <h4><AiOutlineHtml5/>HTML</h4>
            <small>Hyvä</small>
            </div>

            <div className='osaaminen_item'>
            <h4><SiJavascript/>Javascript</h4>
            <small>Erinomainen</small>
            </div>

            <div className='osaaminen_item'>
            <h4><FaNodeJs/>Nodejs </h4>
            <small>Erinomainen</small>
            </div>

            <div className='osaaminen_item'>
            <h4><SiMysql/>SQL</h4>
            <small>Hyvä</small>
            </div>
  
            <div className='osaaminen_item'>
            <h4><FaReact/>React</h4>
            <small>Hyvä</small>
            </div>

            <div className='osaaminen_item'>
            <h4>C#</h4>
            <small>Alkeet</small>
            </div>

            <div className='osaaminen_item'>
            <h4><FaUnity/>Unity</h4>
            <small>Alkeet</small>
            </div>

            <div className='osaaminen_item'>
            <h4></h4>
            </div>

            </div>
                
             </div>
             <div id="harrastukset" className='float-child'>
             <h2 id='title_harrastukset'>Harrastukset ja mielenkiinnon kohteet</h2>
             <a className="text">Tykkään tietokoneista ja tietotekniikasta, suurin osa vapaa-ajastani 
             kuluu tietokoneella istumiseen. <br/><br/>Tietokoneella ollessa tulee katseltua paljon youtubea, 
             jonkin verran twitchiä ja joskus myös elokuvia ja sarjoja. Sarjoissa ja elokuvissa pidän
             eniten toiminnasta ihan toimintakomedioista sinne hieman raaempaan päätyyn sekä scifistä.
             Youtubea tykkään katsella todella laidasta laitaan, tietotekniikkaa, dokkareita, peleihin liittyviä 
             videoita, draamaa. Käytännössä katselen kaikkea mikä nyt vain vaikuttaa sillä hetkellä mielenkiintoiselta<br/><br/>
             Pelaan myös jonkin verran tietokonepelejä ja usein pelatessa tulee samalla striimattua pelaamistani 
             twitchiin joskin koen hieman olevani kyllästynyt kun aikoinaan tullut pelattua todella paljon ellei 
             jopa liikaa. Suosikki pelini on ehdottomasti CS:GO yli 4000 tuntia käytetty kyseiseen peliin ja hyvänä 
             kakkosena minecraft johon en ole muutamaan vuoteen koskenut mutta on siihenkin tullut aikaa 
             upotettua ainakin parintuhannen tunnin verran vuosien 2012-2020 välillä. <br/><br/>Luonteeltani olen introvertti 
             ja viihdyn mielestäni hyvin yksin, olen myös rauhallinen ja rehellinen</a>
             </div>
            </div>
            </div>
        )
}