import React, { useState } from 'react';
import "./Profile.css"


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
             <pre>This    text      has    lots of     spaces</pre>
             <pre>This    text      has    lots of     spaces</pre>
             <pre>This    text      has    lots of     spaces</pre>
             <pre>This    text      has    lots of     spaces</pre>
             </div>
             </div>
            </div>
        )
}