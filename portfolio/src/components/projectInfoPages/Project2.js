import React, { useState } from 'react';
import "./Project.css"
import kuva1 from "../../pictures/project2_pic1.png"
import kuva2 from "../../pictures/project2_pic2.png"

export default function Project2() {

        return (
            <div className="projectRoot">
            <h1 className='project_title'>Travian botti</h1>

            <div className="project_box">

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Projektin kuvaus</h2><br/><br/>
             </div>
             <a className='text_project'>Verkkoselainpeliä traviania varten tekemäni botti joka pelaa peliä puolestani.
             Tämä projekti on kokonaan minun tekemä ja suunniteltu minulle henkilökohtaiseen käyttöön, mikä näkyy muun 
             muassa suunnitelman puuttumisena sekä projektin aikautauluissa. En jaksanut tehdä mitään suunnitelmaa koska 
             en kokenut sitä tarpeellisena. Mitään varsinaista aikatauluakaan tällä projektilla ei ole, edistyminen kulki 
             ihan sen mukaan kuinka paljon minulla oli aikaa ja motivaatiota tämän projektin tekemiseen ja motivaatio
             oli sidottu vahvasti minun travianin pelaamiseen sillä kun lopetin travianin pelaamisen lopetin myös tämän projektin jatkamisen.
             Tämän projektin päätavoite oli vähentää travianiin käyttämääni aikaa ilman että jäisin muista pelaajista jälkeen.
             Lisäksi halusin haastaa itseäni ja vastata päässäni olevaan kysymykseen riittääkö osaamiseni tälläisen tekemiseen?
             <br/><br/>
             Tämä projekti jäi mielestäni kesken. Rakennusten rakentamis ominaisuus jäi osittain kesken ja tämän lisäksi
             tähän bottiin olisi voinut lisätä vaikka mitä ominaisuuksia ja visuaaliseenkin puoleen jäi vielä paljon tekemistä
             sillä keskityin enimmäkseen vain toiminnallisuuksien tekemiseen.

             </a>
             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Tärkeimmät toiminnallisuudet</h2><br/><br/>
             </div>
             <a className="text_project">Tämä botti on koodattu Electron frameworkilla käyttäen html:llää, css:ssää ja javascriptiä sekä
             puppeteeria joka on javascript moduuli joka sisältää koodilla ohjattavan chromium selaimen jota voi käyttää esimerkiksi datan keräämiseen
             miltä tahansa nettisivulta eli webscrapeemiseen ja tässä tapauksessa myös sivulla olevien nappuloiden painamiseen. Electronin avulla tein tästä botista ajettavan .exe windows sovelluksen.
            <br/><br/>
             Botille pitää ensin antaa
             kaksi aikaa minuutteina, minimi ja maksimi, farmilistojen numerot sekä pelimaailman url osoite, pelaajan käyttäjätunnus ja salasana. Sen jälkeen sille voi lisätä rakennuksia rakennettavaksi
             rakennusjonoon. Jonka jälkeen kun botin käynnistää painamalla start nappulaa botti kirjautuu käyttäjän
             tilille, lähettää farmilistat ja laittaa rakennusjonossa seuraavana olevan rakennuksen rakentumaan jos mahdollista.
             Tämän jälkeen botti arpoo randomilla numeron käyttäjän asettaman minimin ja maksimin väliltä ja odottaa arvotun numeron
             ajan minuutteina jonka jälkeen sama toistuu, farmilistat, rakentaminen, uusi randomi odotusaika ja odottaminen.
             </a>

             
             <div className="picture_grid large">
             <div>
           
             <img src={kuva1} className="picture"></img>

             <a className="text_project">Tässä kuvassa näkyy koko botin käyttöliittymä. Vasemmanpuolimmaisesta
             erillisestä ikkunasta lisätään botille rakennuksia rakennusjonoon jotka näkyvät keskellä olevassa pääikkunassa 
             tasks laatikon sisällä, lisäsin sinne muutaman rakennuskäskyn malliksi. Keskellä olevassa pääikkunassa näkyy
             ylhäällä nappuloita joista saa nuo muut ikkunat aukaistua, startattua ja stopattua botin sekä poistuttua botista
             sulkemalla se kokonaan. State kohdassa näkyy botin tämänhetkinen tila eli onko se päällä vai stopattuna. Logs kohdan
             alla näkyy mitä botti on milloinkin tehnyt ja tasks kohdan alla näkyy botille annettu rakennusjono. Oikeanpuolimmaiseen
             ikkunaan tulee käyttäjän tiedot että botti osaa toimia. Useragent laatikkoon copypastetaan käyttäjän jonkun muun
             selaimen useragent jotta botti vaikkuttaisi vähemmän bottimaiselta joka vähentää kiinnijäämisen riskiä sillä bottien
             käyttäminen on kielletty travianin terms of servicessä. Server kohtaan tulee serverin sisäänkirjautumis-sivun url osoite.
             Username ja Password kentät ovat itsestäänselviä. Farmlists kohtaan farmilistojen numerot jotta botti osaa lähettää ne.
             Interval kenttiin minimi ja maksimi että kuinka tiheästi haluaa botin pelaavan joiden avulla botti arpoo randomilla
             joka odotuskohdassa uuden odotusajan, tämä tehty samasta syystä kuin useragent kenttä. Headless kohdasta käyttäjä
             saa valita haluaako nähdä selaimen jota botti ohjaa vai pidetäänkö se piilossa taustatehtävänä. Select nappia painamalla
             käyttäjän pitää vielä käydä valitsemassa chrome.exe, muuten botti ei toimi, tästä selitettynä paremmin alempana
             Ongelmat ja ratkaisut kohdassa. Save nappula tallentaa tiedot erilliseen json tiedostoon json muodossa josta botti osaa
             ne lukea ettei näitä samoja tietoja joudu aina syöttämään uudelleen botin avaamisen yhteydessä, myös botin rakennusjono
             tallentuu erilliseen json tiedostoon samasta syystä.
             </a>
             </div>

             </div>

             <div className="picture_grid large">
             <div>
           
             <img src={kuva2} className="picture"></img>

             <a className="text_project">Tässä näkyy minun vanhat käyttäjätiedot botin tallentamana config.json tiedostoon,
             paitsi salasana jonka poistin ennen kuvan ottamista tietoturvasyistä. Tämä botti ei ole kovin tietoturvallinen
             ainakaan siinä mielessä että käyttäjän salasana tallennetaan sellaisenaan muun datan mukana json tiedostoon
             josta se on helposti nähtävissä. Ilman salasanan antamista botin tietoon se ei tietenkään voi toimia mutta näin
             jälkeenpäin ajateltuna olisi ehkä ollut järkevämpää että salasanaa ei tallennettaisi ollenkaan ja botti kysyisi
             sen aina käyttäjältä uudelleen avaamisen yhteydessä.
             </a>
             </div>

             </div>

             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Ongelmat ja ratkaisut</h2><br/><br/>
             </div>
             <a className="text_project">Pienenä ongelmana oli aluksi Electronin käyttö johtuen kokemuksen puutteesta. Tästä
             pääsin eteenpäin youtube tutoriaalien avulla. Tämän lisäksi tästä projektista on jäänyt hyvin mieleen toinenkin
             ongelma, joka oli seuraavanlainen että kun ajoin botin komentokehotteen tai powershellin avulla niin kaikki toimi niinkuin
             kuuluikin mutta kun tein siitä exen niin botti ei enää tehnyt mitään, tämä johtui siitä että Electron ei jostain syystä
             toimi kunnolla puppeteerin sisältämän chromium selaimen kanssa ja tämän saa korjattua vaihtamalla puppeteer käyttämään
             chromea chromiumin sijaan. Ratkaisun ongelmaan löysin googlettamalla ja minulla on vielä linkki kyseiseen artikkeliin 
             tallessa jossa on ongelma sekä ratkaisu paremmin selitettynä.
             
             Tässä linkki kyseiseen artikkeliin <a className="text_project" href="https://medium.com/@alexanderruma/using-node-js-puppeteer-and-electronjs-to-create-a-web-scraping-app-with-a-desktop-interface-668493ced47d">https://medium.com/@alexanderruma/using-node-js-puppeteer-and-electronjs-to-create-a-web-scraping-app-with-a-desktop-interface-668493ced47d</a>
             </a>
             </div>

             <div className='project_child bottom'>
             <div className='title_div'>
             <h2 className='title'>Videoesittely</h2><br/><br/>
             </div>
             <a className="text_project">En ole tehnyt tästä projektista videoesittelyä sillä mielestäni tässä ei ole
             tarpeeksi esiteltävää ja tämän lisäksi tarvitsisin esittelyä varten pelitilin jolla on ostettuna kultaklubi 
             farmilistoja varten.
             </a>
             </div>


            </div>
            </div>
        )
}