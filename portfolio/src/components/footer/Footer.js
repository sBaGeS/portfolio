import React from 'react';
import "./Footer.css"
import {AiOutlineMail} from "react-icons/ai";



export default function Footer() {
    
    return (
        <div id="footerRoot">
        <div id="footer_left">
        <h1 id= "contact_info_label">Yhteystiedot</h1>
        <a id="email_info"><AiOutlineMail id="emailIcon"/>pauli1.kemppainen@gmail.com</a>
        </div>
        <div id="footer_right"></div>
        </div>
    );
}