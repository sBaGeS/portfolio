import React, { useState } from 'react';
import "./Project.css"
import kuva1 from "../../pictures/project3_pic1.png"
import kuva2 from "../../pictures/project3.png"
import kuva3 from "../../pictures/project3_pic3.png"
import kuva4 from "../../pictures/project3_pic4.png"

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
             hakemiseen netistä, sen tallentamiseen, hakemiseen tietokannasta tai muokkaamiseen. Tästä kerrottuna tarkemmin
             tärkeimmät toiminnallisuudet kappaleessa. <br/> <br/> Tämä projekti on kokonaan minun tekemä ja suunniteltu minulle
             henkilökohtaiseen käyttöön, mikä näkyy muun muassa suunnitelman puuttumisena sekä projektin aikautauluissa. 
             En jaksanut tehdä mitään suunnitelmaa koska en kokenut sitä tarpeellisena. Mitään varsinaista aikatauluakaan tällä
             projektilla ei ole, edistyminen kulki ihan sen mukaan kuinka paljon minulla oli aikaa ja motivaatiota tämän projektin
             tekemiseen eli joskus tein 10 tuntia päivässä ja joskus jätin hyllylle lojumaan x määräksi aikaa kun loppui motivaatio
             tai aika.<br/> <br/> Koen tämän projektin muuten valmiiksi paitsi kaavaan jolla elolukuja päivitetään
             tulee vielä muutoksia koska koen että ennusteet eivät ole tarpeeksi paikkaansapitäviä. <br/> <br/>
             Projektin tavoite on ennustaa tulevia CS:GO pelejä riittävän tarkasti että pystyn tekemään sen avulla rahaa
             esimerkiksi lyömällä itse vetoa niihin peleihin tai myymällä ennusteita eteenpäin muiden käytettäväksi. 
             Toistaiseksi en ole päässyt tuohon tavoitteeseen, teknisesti kaikki toimii mutta ennusteet eivät vain ole tarpeeksi
             paikkaansapitäviä. Jos ja kun saan ratingin laskukaavan toimivaksi olisi tarkoitus laajentaa
             projektia myös muihin peleihin todennäköisesti ensimmäiseksi Valoranttiin koska se on lähimpänä CS:GO:ta.
             </a>

             <div className="picture_grid">
             <div>
           
             <img src={kuva1} className="picture"></img>

             <a className="text_project">Kuvassa on esiteltynä powershellillä tulostettu ennuste tiimien ENCE ja
             Astralis välisestä ottelusta ennen ottelun pelaamista. Ennusteen mukaan ENCE:n voittomahdollisuus 48.8% ja Astraliksen
             51.2%. Ylhäällä näkyy kaikki kartat ja karttakohtaiset voittomahdollisuudet esimerkiksi kartassa Dust2 ENCEN
             voittomahdollisuudet ovat 63.9% ja Astralikselle jää noin 36.1%. Näiden alapuolella näkyy kolme karttaa jotka ohjelma
             veikkaa tiimien pelaavan ja joiden perusteella kokonaisvoittomahdollisuudet tiimeille on laskettu. 
             <br/><br/> Tässä linkki ottelun hltv sivulle <a className="text_project" href="https://www.hltv.org/matches/2357734/ence-vs-astralis-esl-pro-league-season-16">https://www.hltv.org/matches/2357734/ence-vs-astralis-esl-pro-league-season-16</a>
             </a>
             </div>

             <div>
   
             <img src={kuva2} className="picture"></img>
             <a className="text_project">Kuvassa näkyy tietokannan pelaajataulukko. Rating sarakkeeseen
             on laskettu yhteen pelaajan kaikkien eri karttojen ratingit ja rivit on järjestetty sen mukaan. Eli toisin sanoen
             kuvassa näkyy minun ratingsysteemin mukaan pelin parhaat pelaajat kuvan ottamishetkenä kokonaisratingin mukaan järjestettynä.
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
             sivustolta puppeteerin avulla. Seuraavaksi kerron projektin tärkeimmistä scripteistä ja mitä ne tekevät.
             Olen jakanut scriptit kahteen kansioon sen mukaan kuinka usein niitä tarvitsee käyttää. Testing kansion alta löytyy
             scriptit jota tarvitsen harvoin ja Datascaperiksi nimetyn kansion alle olen koonnut scriptit joita käytän lähes
             päivittäin. <br/><br/>Testing kansion alla oleva index.js navigoi puppeteerin avulla hltv.org/results osoitteeseen ja käy 
             yksitellen kaikki pelatut pelit läpi niin pitkältä aikaväliltä kun olen sille määritellyt, tällä hetkellä minulla on
             tulokset yli 54700 pelistä vuodesta 2016 alkaen. Scripti kirjaa jokaisen tuloksen tiedot ylös tietokantaan
             gamehistory tauluun, sinne kirjataan pelin päivämäärä, tiimien nimet, pelaajien nimet, pelaajien karttakohtaiset hltv
             ratingit ja pelattujen karttojen nimet ja tulokset. Tätä tarvitsen vain kerran kaikkien tuloksien
             hakemista varten.<br/><br/> Testing kansion alla oleva predictor.js on
             tehty kaikkien ratingien uudelleenlaskemiseen ja niiden testaamiseen ja tätä tarvitsen silloin kun muutan 
             kaavaa jota käytän ratingien laskemiseen. Käytännössä ensimmäisenä tämä scripti tyhjentää suurimman osan tietokannan
             tauluista muun muassa pelaajataulukon, tiimitaulukon ja ennustustaulukon. Tämän jälkeen lähdetään gamehistoryä
             käymään läpi rivi kerrallaan ja lisätään tarvittavat tiimit ja pelaajat jos niitä ei vielä ole ja lähdetään
             päivittämään pelaajien karttakohtaisia ratingeja tulosten perusteella. Kun päästään tarpeeksi pitkälle minun
             määrittelemääni kohtaan gamehistoryn käsittelyssä ennen ratingejen muuttamista scripti tekee ennusteen pelin
             tuloksesta ja kirjaa ennusteen sekä oikean tuloksen ylös predictions tauluun josta niitä myöhemmin analysoidaan,
             tarkoituksena selvittää kuinka tarkkoja ennusteet ovat. Kun koko gamehistory on käyty läpi sitten scripti käy ennusteet
             läpi ja laskee niille mse arvon eli mean squared error jonka jälkeen sama tehdään niin että scripti arpoo tulokset
             oikeiden tuloksien sijaan käyttäen ennusteiden probabilityjä ja viimeiseksi vertaillaan näiden kahden mse arvon
             erotusta.<br/><br/> Datascraper kansion alla oleva update.js tekee melkein saman kun nuo kaksi scriptiä yhteensä
             eroina ne että pitkän aikavälin sijaan gamehistoryyn lisätään vain eilisen pelit, tauluja ei tyhjennetä eli ratingit
             muutetaan edellisten päälle ja tietenkin vain uusien juuri lisättyjen pelien osalta ja uusia ennusteita ei analysoida millään
             tavalla. Tätä käytän päivittäin tietokannan pitämiseen ajantasalla.<br/><br/> Datascraper kansion alla olevaa predictor.js
             scriptiä käytän lähes päivittäin uusien pelien tulosten ennustamiseen. Scripti menee puppeteerin avulla hltv.org/matches
             sivulle josta se käy läpi kaikki uudet pelit joita ei ole vielä pelattu ja laskee niihin ennusteet tietokannassa olevien
             pelaajaratingejen perusteella.
             </a>

             <div className="picture_grid">
             <div>
           
             <img src={kuva3} className="picture"></img>

             <a className="text_project">Kuvassa näkyy koodia Datascraperin predictor.js scriptistä. Ensiksi koodi starttaa
             puppeteerin eli chromium selaimen jota voi ohjata koodilla. Seuraavaksi scripti avaa tyhjän sivun ja asettaa selaimen useragentin oman
             koneeni chrome selaimen mukaiseksi. Sitten se navigoi hltv.org/matches sivulle ja etsii kaikki sivustolla olevat linkit.
             Tämän jälkeen linkit parsitaan niin että jäljelle jää vain ne mitä tarvitsen eli linkit kaikkiin uusiin otteluihin.
             Sitten loopataan kaikki jäljellä olevat linkit läpi, ensin navigoiden linkkiin selaimella, jonka jälkeen scrapetaan sivulta tiimien nimet
             ja tarkistetaan onko niitä vielä olemassa tietokannassani ja jos ei niin lisätään ne sinne. Tämän jälkeen tehdään vielä paljon kaikkea
             mutta enempää en saanut kuvaan mahtumaan sillä scripti on kokonaisuudessaan yli 800 riviä pitkä.
             </a>
             </div>

             <div>
   
             <img src={kuva4} className="picture"></img>
             <a className="text_project">Kuvassa näkyy tämän projektin tietokantamalli.
             </a>
             </div>
             </div>

             </div>

             <div className='project_child bottom'>
             <div className='title_div'>
             <h2 className='title'>Ongelmat ja ratkaisut</h2><br/><br/>
             </div>
             <a className="text_project">Kaikkia pieniä ongelmia ja ratkaisuja en muista sillä en ole
             kirjannut niitä mihinkään ylös. Puppeteerin käytön kanssa oli alussa pieniä ongelmia datan scrapeemisessa
             johtuen kokemuksen puutteesta mutta näistä pääsin aina aika nopeasti yli youtube tutoriaalien ja googlettamisen 
             avulla. Isoin ja vielä tällä hetkelläkin auki oleva ongelma tässä projektissa on kaava jolla ratingeja päivitetään.
             Se on ollut alusta asti ongelma sillä minulla ei ole ollut siihen mitään valmista mallia vaan olen joutunut menemään
             trial and error menetelmällä, eli olen vain muutellut eri asioiden painotusarvoja sekä elo rating systeemin 
             k-factoria eli päivitysnopeutta mututuntumalla ja sen jälkeen aina testannut sen tarkkuutta. Toinen mahdollinen
             ongelma on tapa jolla testaan kaavan tarkkuutta, todennäköisyyksien testaaminen ei ole ihan helpoimmasta päästä ja
             tähän olen kokeillut monenlaista matemaattista sekä itse väkertämääni funktiota ennen kuin päädyin käyttämään
             mean squared erroria, tämän valinnan tekemisessä käytin apuna tiedon hankintaa googlettamalla sekä youtube tutoriaaleja.

             </a>
             </div>

            </div>
            </div>
        )
}