import React, { useState } from 'react';
import "./Project3.css"

export default function Project1() {

        return (
            <div id="projectRoot">
            <h1 id='project_title'>Elorating systeemi csgo peliin</h1>   
            <div className="float_project">

             <div id="project3_info" className='project3_child'>
             <h2 id="title_info3">Projektin Kuvaus</h2>
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
             </div>

             <div id="funktiot3" className='project3_child'>
             <h2 id='title_funktiot3'>Funktioiden kuvaukset</h2>
             <a className="text_project">Datan keräämisen netistä toteutin Puppeteerin avulla joka on nodeen asennettava
             moduuli joka sisältää koodilla ohjattavan chromium selaimen jota voi käyttää esimerkiksi datan keräämiseen
             miltä tahansa nettisivulta eli webscrapeemiseen. Kaikki tähän projektiin tarvittava data on webscrapettu hltv.org
             sivustolta puppeteerin avulla.</a>
             </div>

             <div id="toiminnallisuudet" className='project3_child'>
             <h2 id='title_toiminnallisuudet'>Ongelmat ja ratkaisut</h2>
             <a className="text_project">tähän tietoa projektin ongelmista ja ratkaisuista</a>
             </div>

            </div>
            </div>
        )
}