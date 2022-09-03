import React, { useState } from 'react';
import "./Footer.css"
import {AiOutlineMail} from "react-icons/ai";
import {GrContact} from "react-icons/gr";
import ContactDialog from '../contactDialog/ContactDialog.js';


export default function Footer() {

const [open, setOpen] = useState(false);
let dialog;

if(open){
    dialog = <ContactDialog open = {setOpen} />;
}
else{
    dialog = "";
}
    
    return (
        <div id="footerRoot">
        <div id="footer_left">
        <h1 id= "contact_info_label">Yhteystiedot</h1>
        <a id="email_info"><AiOutlineMail id="emailIcon"/>pauli1.kemppainen@gmail.com</a>
        </div>
        <div id="footer_right"><button id="contactButton" onClick={() => open ? setOpen(false) : setOpen(true)}><GrContact id="contactIcon"/>Ota yhteyttä</button></div>
        {dialog}
        </div>
    );
}