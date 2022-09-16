import React, { useState } from 'react';
import "./Project1.css"

export default function Project1() {

        return (
            <div id="projectRoot">
                <h1 id='project_title'>Projektin nimi</h1>        
            <div className="float_project">

             <div id="project1_info" className='project1_child'>
             <h2 id='title_info1'>Projektin kuvaus</h2>
             <a className='text_project'>Tämä projekti on fullstack nettisivu, eli se on jakautunut kolmeen eri
             osa-alueeseen jotka ovat frontend, backend ja tietokanta. Frontend on toteutettu reactilla, 
             backendi nodejs:llä ja tietokantana toimii mysql. <br/> <br/>
             Projekti oli tarkoitus tehdä kolmen hengen ryhmissä Savonia Code Academyn lopputyöksi, tosin yksi meidän 
             ryhmämme jäsen ei osallistunut projektin tekemiseen joten käytännössä meitä oli kaksi. <br/> <br/>
             Projekti jakautui kuuteen kahden viikon pituiseen sprinttiin. Projektista tehtiin alkusuunnitelma 
             Azuren Devopsiin. Suunnitelmassa määriteltiin toiminnallisuudet, mitkä niistä oli tarkoitus toteuttaa
             missäkin sprintissä sekä työnjako eli kenen vastuulla minkäkin toiminnallisuuden tekeminen oli.</a>
             </div>

             <div id="t1" className='project1_child'>
             <h2 id='title_t1'>Tehtävän kuvaus</h2>
             <a className="text_project">En muista ihan tarkasti mitkä kaikki toiminnallisuudet ovat minun tekemiä koska
             minulla ei ole enää pääsyä projektin suunnitelmaan ja emme jakaneet tehtävänantoa niin karkeasti että
             esimerkiksi toinen meistä tekisi backendin kokonaan ja toinen frontendin muun muassa sen takia koska halusimme
             että molemmat meistä pääsevät tekemään sekä frontendiä että backendiä. <br/> <br/>
             Tässä suuntaa-antavasti minun tehtäväni. Minun focus oli enemmän backendin puolella koska koin ja koen sen
             edelleen mukavammaksi ja helpommaksi kuin frontin tekemisen joten karkeasti sanottuna noin 80% projektin backendistä
             on minun tekemää sisältäen käyttäjän autentikoinnin backendissä tietokannasta tiedon hakemisen, muokkaamisen, lisäämisen
             ja poistamisen yhteydessä sekä tietenkin suurimman osan reiteistä ja metodeista että tietokannan kanssa kommunikoiminen
             on yleensäkään mahdollista. Tämän lisäksi autoin jonkunverran frontendin tekemisessä, tein ehkä noin puolet admin sivuista
             muun muassa sivun jossa admin voi nähdä käyttäjien tietoja, hakea käyttäjiä erilaisilla hakuehdoilla, muokata käyttäjien tietoja
             tai poistaa käyttäjiä. Tietokantamallin suunnittelimme yhdessä.</a>
             </div>

             <div id="funktiot1" className='project1_child'>
             <h2 id='title_funktiot1'>Funktioiden kuvaukset</h2>
             <a className="text_project"></a>
             </div>

             <div id="toiminnallisuudet" className='project1_child'>
             <h2 id='title_toiminnallisuudet'>Ongelmat ja ratkaisut</h2>
             <a className="text_project">tähän tietoa projektin ongelmista ja ratkaisuista</a>
             </div>

            </div>
            </div>
        )
}