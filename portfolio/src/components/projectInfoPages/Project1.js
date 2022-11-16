import React, { useState } from 'react';
import "./Project.css"
import kuva1 from "../../pictures/project1.png"
import kuva2 from "../../pictures/project1_pic1.png"
import kuva3 from "../../pictures/project1_pic3.png"
import kuva4 from "../../pictures/project1_pic4.png"
import kuva5 from "../../pictures/project1_pic5.png"
import kuva6 from "../../pictures/project1_pic2.png"
import kuva7 from "../../pictures/project1_pic6.png"

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
             Tässä suuntaa-antavasti minun osuuteni. Minun focus oli enemmän backendin puolella koska koin ja koen sen
             edelleen mukavammaksi ja helpommaksi kuin frontin tekemisen joten karkeasti sanottuna noin 80% projektin backendistä
             on minun tekemää sisältäen käyttäjän autentikoinnin backendissä tietokannasta tiedon hakemisen, muokkaamisen, lisäämisen
             ja poistamisen yhteydessä sekä tietenkin suurimman osan reiteistä ja metodeista että tietokannan kanssa kommunikoiminen
             on yleensäkään mahdollista. Tämän lisäksi autoin jonkunverran frontendin tekemisessä, tein noin puolet admin sivuista
             muun muassa sivun jossa admin voi nähdä käyttäjien tietoja, hakea käyttäjiä erilaisilla hakuehdoilla, muokata käyttäjien tietoja
             ja poistaa käyttäjiä. Tietokantamallin suunnittelimme yhdessä.</a>

             <div className="picture_grid">
             <div>
           
             <img src={kuva5} className="picture"></img>

             <a className="text_project">Kuvassa näkyy minun tekemäni aikaisemmin mainittu adminkomponentti
             käyttäjien tietojen hallintaan. Tietoja voi filteröidä eri hakuehdoilla joiden kirjoituskentät näkyvät
             tietotaulukon yläpuolella. Tämän lisäksi kun tietotaulua kelaa oikealle siellä on Edit nappulan oikealla
             puolella kolme nappulaa lisää, delete joka poistaa käyttäjän, cabins joka näyttää käyttäjän mökit ja
             reservations joka näyttää käyttäjän varaukset. Taulukon leveyden takia se ei mahdu kokonaan yhteen kuvaan.
             </a>

             <img src={kuva7} className="picture"></img>

            <a className="text_project">Tässä kuvassa näkyy sama testidata kuin ylemmässä kuvassa mutta otettuna suoraan
            tietokannasta MySQL Workbenching avulla. Kiinnittäkää huomiota salasana kenttään, kunnon sillisalaattia ja
            kaikilla käyttäjillä vielä erilaista vaikka kaikille käyttäjille asetettu tässä esimerkissä salasanaksi 
            Salasana123
            </a>
             </div>

             <div>
   
             <img src={kuva6} className="picture"></img>
             <a className="text_project">Kuvassa näkyy projektin frontendin App.js tiedosto 
             joka sisältää kaikki projektin reitit ja komponentit ja huolehtii siitä mikä
             komponentti milloinkin käyttäjälle näytetään.
             </a>
             </div>
             </div>

             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Tärkeimmät toiminnallisuudet</h2><br/><br/>
             </div>
             <a className="text_project">Projektin tärkeimmät toiminnallisuudet käyttäjille ovat että henkilö voi 
             rekisteröityä sivulle jonka jälkeen sivulle voi kirjautua sisään. Sisäänkirjautuneena käyttäjä voi
             lisätä omia mökkejään sivulle muiden vuokrattavaksi, selata ja varata muiden käyttäjien mökkejä, muokata omia 
             henkilötietojaan ja omien mökkejen tietoja, katsella ja muokata omien mökkiensä varaustietoja ja varata sivuston
             ylläpitäjien lisäämiä lisäpalveluita.<br/> <br/> Käyttäjien lisäksi sivustolla on admin rooli joka on
             tarkoitettu sivuston hallintaan ja jonka voi lisätä mille tahansa käyttäjälle. Käyttäjällä jolle on annettu
             admin rooli on edellä mainittujen toiminnallisuuksien lisäksi paljon lisätoiminnallisuuksia joista tärkeimmät
             ovat käyttäjien tietojen, mökkien ja varausten hakeminen, muokkaaminen ja poistaminen. Tämän lisäksi adminit voivat
             lisätä, muokata ja poistaa lisäpalveluita ja hallita käyttäjien laskutusta. Lasku lähtee automaattisesti käyttäjän
             sähköpostiin varauksen yhteydessä ja adminit näkevät jokaisen laskun tilan onko se maksettu vai ei ja he voivat
             tarvittaessa generoida laskusta pdf version.<br/><br/>Tämä projekti on toteutettu mahdollisimman tietoturvalliseksi.
             Ainakin seuraavat asiat on huomioitu sivuston tietoturvallisuudessa. Backendi on toteutettu niin että käyttäjillä
             on pääsy vain heille tarkoitettuihin tietoihin ja metodeihin. Tämä pätee kaikkien tietojen lisäämiseen, muokkaamiseen
             poistamiseen ja hakemiseen. Ainoastaan admin roolin omaavia käyttäjiä ei ole rajoitettu mitenkään. Sama pätee myös 
             frontendiin eli käyttäjillä on pääsy vain heille tarkoitetuille sivuille. Käyttäjän syötettä ei lähetetä
             missään tilanteessa raakana tietokantaan, lisäksi ei käytetä tietokannan root käyttäjää vaan projektille on oma 
             käyttäjä tietokannassa jonka käyttöoikeudet on rajoitettu minimiin mitä toiminnallisuuksien puitteissa sille tarvitaan.
             Käyttäjien salasanoja ei tallenneta tietokantaan plaintext muodossa vaan kunnolla hashattuna ja saltattuna.
             </a>

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
             tietojen hakemiseen, lisäämiseen, muokkaamiseen ja poistamiseen. Kuvassa näkyy funktio jonka vastuulla on käyttäjien tietoihin
             kohdistuvat get requestit eli niiden hakeminen. Ensimmäiseksi scripti kutsuu edellisessä kuvassa näkyvää authenticationControlleria.
             Sen jälkeen tarkistetaan onko käyttäjä kirjautunut sisälle, eli jos requestin header osiosta puuttuu token kenttä tai
             sitä on muokattu niin homma tyssää siihen. Silloin palautamme käyttäjälle koodin 401 sekä tiedon Not authorized.
             Sitten tarkistetaan onko käyttäjä admin, jos on niin hypätään koodissa eteenpäin ja toteutetaan personSQL.js tiedostossa
             oleva fetchPersons_admin funktio joka ajaa sql komennon tietokantaan haluttujen tietojen hakemista varten ja tämän jälkeen
             tiedot palautetaan käyttäjälle status koodin 200 kera. Jos käyttäjällä ei ole admin roolia seuraavaksi testaamme että
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

             <div className='project_child bottom'>
             <div className='title_div'>
             <h2 className='title'>Ongelmat ja ratkaisut</h2><br/><br/>
             </div>
             <a className="text_project">
                Isoimpana ja toistuvana ongelmana tässä projektissa oli kokemuksen puute. Olin opiskellut koodaamista alle vuoden
                tämän projektin tekohetkellä ilman mitään aikaisempaa kokemusta koodaamisesta saati tämän kokoluokan 
                sovelluksien tekemisestä. Koulussakaan meille ei ollut opetettu ihan kaikkea, perusteet tietenkin opetettiin ja  
                hallitsinkin jo tässä vaiheessa mutta esimerkiksi käyttäjien autentikoinnin, salasanan tallettamisen turvallisesti ja sen käyttämisen sisäänkirjautumisessa jouduin 
                opettelemaan itse ihan alusta asti sillä se oli minulle ihan uutta asiaa tämän projektin tekohetkellä. Kokemusongelmien ja kaikkien muidenkin ongelmien yli 
                pääsemiseen käytin apuna paljon youtube tutoriaaleja sekä asioiden googlettamista.
             </a>
             </div>

            </div>
            </div>
        )
}