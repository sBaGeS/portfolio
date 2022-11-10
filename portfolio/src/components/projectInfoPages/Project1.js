import React, { useState } from 'react';
import "./Project.css"
import kuva1 from "../../pictures/project1.png"
import kuva2 from "../../pictures/project1_pic1.png"
import kuva3 from "../../pictures/project1_pic3.png"
import kuva4 from "../../pictures/project1_pic4.png"

export default function Project1() {

        return (
            <div className="projectRoot">
            <h1 className='project_title'>Mökkien vuokraus nettisivu</h1>

            <div className="project_box">

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Projektin kuvaus</h2><br/><br/>
             </div>
             <a className='text_project'>Tämä projekti on fullstack nettisivu, eli se on jakautunut kolmeen eri
             osa-alueeseen jotka ovat frontend, backend ja tietokanta. Frontend on toteutettu reactilla, 
             backendi nodejs:llä ja tietokantana toimii mysql. <br/> <br/>
             Projekti oli tarkoitus tehdä kolmen hengen ryhmissä Savonia Code Academyn lopputyöksi, tosin yksi meidän 
             ryhmämme jäsen ei osallistunut projektin tekemiseen joten käytännössä meitä oli kaksi. <br/> <br/>
             Projekti jakautui kuuteen kahden viikon pituiseen sprinttiin. Projektista tehtiin alkusuunnitelma 
             Azuren Devopsiin. Suunnitelmassa määriteltiin toiminnallisuudet, mitkä niistä oli tarkoitus toteuttaa
             missäkin sprintissä sekä työnjako eli kenen vastuulla minkäkin toiminnallisuuden tekeminen oli.</a>

             <div className="picture_grid">
             <div>
           
             <img src={kuva1} className="picture"></img>

             <a className="text_project">Kuvassa näkyy sivuston etusivu jossa olen kirjautuneena sisään admin käyttäjänä.
             </a>
             </div>

             <div>
   
             <img src={kuva2} className="picture"></img>
             <a className="text_project">Kuvassa näkyy tämän projektin tietokantamalli.
             </a>
             </div>
             </div>

             </div>

             <div className='project_child'>
                
             <div className='title_div'>
             <h2 className='title'>Tehtävien kuvaus</h2><br/><br/>
             </div>
             <a className="text_project">En muista ihan tarkasti mitkä kaikki toiminnallisuudet ovat minun tekemiä koska
             minulla ei ole enää pääsyä projektin suunnitelmaan ja emme jakaneet tehtävänantoa niin karkeasti että
             esimerkiksi toinen meistä tekisi backendin kokonaan ja toinen frontendin muun muassa sen takia koska halusimme
             että molemmat meistä pääsevät tekemään sekä frontendiä että backendiä. <br/> <br/>
             Tässä suuntaa-antavasti minun tehtäväni. Minun focus oli enemmän backendin puolella koska koin ja koen sen
             edelleen mukavammaksi ja helpommaksi kuin frontin tekemisen joten karkeasti sanottuna noin 80% projektin backendistä
             on minun tekemää sisältäen käyttäjän autentikoinnin backendissä tietokannasta tiedon hakemisen, muokkaamisen, lisäämisen
             ja poistamisen yhteydessä sekä tietenkin suurimman osan reiteistä ja metodeista että tietokannan kanssa kommunikoiminen
             on yleensäkään mahdollista. Tämän lisäksi autoin jonkunverran frontendin tekemisessä, tein noin puolet admin sivuista
             muun muassa sivun jossa admin voi nähdä käyttäjien tietoja, hakea käyttäjiä erilaisilla hakuehdoilla, muokata käyttäjien tietoja
             tai poistaa käyttäjiä. Tietokantamallin suunnittelimme yhdessä.</a>

             <div className="picture_grid">
             <div>
           
             <img src={kuva3} className="picture"></img>

             <a className="text_project">Kuvassa näkyy minun tekemäni backendin authenticationController.js jonka avulla valvotaan
             että käyttäjä pääsee käsiksi vain hänelle tarkoitettuihin tietoihin.
             </a>
             </div>

             <div>
   
             <img src={kuva4} className="picture"></img>
             <a className="text_project">Kuvassa näkyy osa minun tekemästäni personController.js scriptistä joka kontrolloi backend requestit käyttäjien 
             tietojen hakemiseen, lisäämiseen, muokkaamiseen ja poistamiseen. Kuvassa näkyy moduuli jonka vastuulla on käyttäjien tietoihin
             kohdistuvat get requestit eli niiden hakeminen. Ensimmäiseksi scripti kutsuu vasemmanpuoleisessa kuvassa näkyvää authenticationControlleria.
             Sen jälkeen tarkistetaan onko käyttäjä kirjautunut sisälle, eli jos requestin header osiosta puuttuu token kenttä tai
             sitä on muokattu niin homma tyssää siihen. Silloin palautamme käyttäjälle koodin 401 sekä tiedon Not authorized.
             Sitten tarkistetaan onko käyttäjä admin, jos on niin hypätään koodissa eteenpäin ja toteutetaan personSQL.js tiedostossa
             oleva fetchPersons_admin funktio joka ajaa sql komennon tietokantaan haluttujen tietojen hakemista varten ja tämän jälkeen
             tiedot palautetaan käyttäjälle status koodin 200 kera. Jos käyttäjällä ei ole admin oikeuksia seuraavaksi testaamme että
             requestin mukana kulkeva id on sama kuin verificationin sisältämä id, tällä varmistetaan se että käyttäjä ei saa haettua
             muiden käyttäjien tietoja. Tämän jälkeen kun olemme varmoja siitä että käyttäjä on hakemassa omia tietojaan toteutamme
             personSQL.js tiedostossa olevan getPerson funktion joka ajaa sql komennon tietokantaan haluttujen tietojen hakemista varten ja tämän jälkeen
             tiedot palautetaan käyttäjälle status koodin 200 kera. Tietojen hakeminen on laitettu try catch lohkoon eli mikäli
             tietojen haussa tapahtuu jokin virhe vaikkapa virheellinen sql lauseke tai yhteys tietokantaan konfiguroitu väärin niin
             käyttäjälle palautetaan Technical problem ja virhe console logataan sen löytämisen ja korjaamisen helpottamiseksi.
             </a>
             </div>
             </div>

             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Tärkeimmät toiminnallisuudet</h2><br/><br/>
             </div>
             <a className="text_project"></a>
             </div>

             <div className='project_child bottom'>
             <div className='title_div'>
             <h2 className='title'>Ongelmat ja ratkaisut</h2><br/><br/>
             </div>
             <a className="text_project"></a>
             </div>

            </div>
            </div>
        )
}