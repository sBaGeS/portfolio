import React, { useState } from 'react';
import "./Home.css"
import { useNavigate } from 'react-router';
import {GrDocumentPdf} from "react-icons/gr";
import {AiOutlineRead} from "react-icons/ai";

export default function Home() {
    let navigate = useNavigate();

    function handleReadClick(){
        navigate("profile")
    }

    function handleCvClick(){
       //lataa cv
    }

        return (
            <div id="pageRoot">
            <div id="textDiv">
            <h1 id="homeTitle">Hei, olen Pauli</h1>
            <h2 id="homeInfo">22 vuotias Kuopiosta kotoisin oleva peliohjelmoinnin opiskelija.</h2>
            </div>
            <div>
            <div id="leftButtonDiv"><button id="cvButton" onClick={handleCvClick}><GrDocumentPdf id="iconpdf"/>Lataa cv</button></div>
            <div id="rightButtonDiv"><button id="readMore" onClick={handleReadClick}><AiOutlineRead id="iconread"/>Lue lisää</button></div>
            </div>
            </div>
        )
}