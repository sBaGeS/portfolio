import React, { useState } from 'react';
import "./Profile.css"


export default function Profile() {

        return (
            <div id="profileRoot">
             <div id="koulutus">
             <h2 className='title'>Koulutus</h2>
             <a className="text">Peliohjelmoinnin insinööri. Kaakkois-Suomen ammattikorkeakoulu, Kotka 2022 - 2026.</a>
             <br/>
             <a className="text">Savonia Code Academy. Savonia-ammattikorkeakoulu, Kuopio 2020.</a>
             <br/>
             <a className="text">Tietoliikennetekniikan perustutkinto. Savon ammattiopisto, Kuopio 2019.</a>
             </div>
            </div>
        )
}