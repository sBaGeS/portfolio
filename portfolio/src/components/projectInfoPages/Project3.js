import React, { useState } from 'react';
import "./Project.css"
import kuva1 from "../../pictures/project3_pic1.png"
import kuva2 from "../../pictures/project3.png"

export default function Project3() {

        return (
            <div className="projectRoot">
            <h1 className='project_title'>Elorating systeemi CS:GO peliin</h1>   
            <div className="project_box">


             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Projektin kuvaus</h2><br/><br/>
             </div>
             <a className='text_project'>Tämä projekti koostuu mysql tietokannasta johon tiedot tallennetaan sekä 
             javascript tiedostoista jotka ovat erillisiä komentokehotteen tai powershellin avulla ajettavia 
             nodejs scriptejä joilla kaikilla on oma tarkoituksensa datan
             hakemiseen netistä, sen tallentamiseen, hakemiseen tietokannasta tai muokkamiseen. Tästä kerrottuna tarkemmin
             funktioiden kuvaukset kappaleessa. <br/> <br/> Tämä projekti on kokonaan minun tekemä ja suunniteltu minulle
             henkilökohtaiseen käyttöön, mikä näkyy muun muassa suunnitelman puuttumisena sekä projektin aikautauluissa. 
             En jaksanut tehdä mitään suunnitelmaa koska en kokenut sitä tarpeellisena. Mitään varsinaista aikatauluakaan tällä
             projektilla ei ole, edistyminen kulki ihan sen mukaan kuinka paljon minulla oli aikaa ja motivaatiota tämän projektin
             tekemiseen eli joskus tein 10 tuntia päivässä ja joskus jätin hyllylle lojumaan x määräksi aikaa kun loppui motivaatio
             tai aika.<br/> <br/> Koen tämän projektin muuten valmiiksi paitsi kaavaan jolla elolukuja päivitetään
             saattaa vielä tulla joskus muutoksia jos koen että ennusteet eivät ole tarpeeksi paikkaansapitäviä. <br/> <br/>
             Projektin tavoite on ennustaa tulevia CS:GO pelejä riittävän tarkasti että pystyn tekemään sen avulla rahaa
             esimerkiksi lyömällä itse vetoa niihin peleihin tai myymällä ennusteita eteenpäin muiden käytettäväksi. 
             Toistaiseksi en ole päässyt tuohon tavoitteeseen, teknisesti kaikki toimii mutta ennusteet eivät vain ole tarpeeksi
             paikkaansapitäviä.
             </a>

             <div id="templateGrid_info3">
             <div className='info3_gridItem'>
           
             <img src={kuva1} id="kuva1"></img>

             <a className="text_project">Yläpuolella olevassa kuvassa on esiteltynä powershellillä tulostettu ennuste tiimien ENCE ja
             Astralis välisestä ottelusta ennen ottelun pelaamista. Ennusteen mukaan ENCE:n voittomahdollisuus 48.8% ja Astraliksen
             51.2%. Ylhäällä näkyy kaikki kartat ja karttakohtaiset voittomahdollisuudet esimerkiksi kartassa Dust2 ENCEN
             voittomahdollisuudet ovat 63.9% ja Astralikselle jää noin 36.1%. Näiden alapuolella näkyy kolme karttaa jotka ohjelma
             veikkaa tiimien pelaavan ja joiden perusteella kokonaisvoittomahdollisuudet tiimeille on laskettu. 
             <br/><br/> Tässä linkki ottelun hltv sivulle <a className="text_project" href="https://www.hltv.org/matches/2357734/ence-vs-astralis-esl-pro-league-season-16">https://www.hltv.org/matches/2357734/ence-vs-astralis-esl-pro-league-season-16</a>
             </a>
             </div>

             <div className='info3_gridItem' id="grid_item2">
   
             <img src={kuva2} id="kuva2"></img>
             <a className="text_project">Yläpuolella olevassa kuvassa näkyy tietokannan pelaajataulukko. Rating sarakkeeseen
             on laskettu yhteen pelaajan kaikkien eri karttojen ratingit ja rivit on järjestetty sen mukaan. Eli toisin sanoen
             kuvassa näkyy minun ratingsyysteemin mukaan pelin parhaat pelaajat kokonaisratingin mukaan järjestettynä.
             </a>
             </div>
             </div>

             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Tärkeimmät toiminnallisuudet</h2><br/><br/>
             </div>
             <a className="text_project">Datan keräämisen netistä toteutin Puppeteerin avulla joka on nodeen asennettava
             moduuli joka sisältää koodilla ohjattavan chromium selaimen jota voi käyttää esimerkiksi datan keräämiseen
             miltä tahansa nettisivulta eli webscrapeemiseen. Kaikki tähän projektiin tarvittava data on webscrapettu hltv.org
             sivustolta puppeteerin avulla.</a>
             </div>

             <div className='project_child bottom'>
             <div className='title_div'>
             <h2 className='title'>Ongelmat ja ratkaisut</h2><br/><br/>
             </div>
             <a className="text_project">tähän tietoa projektin ongelmista ja ratkaisuista</a>
             </div>

            </div>
            </div>
        )
}