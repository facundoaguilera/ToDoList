import react,{useEffect, useState} from "react";
import axios from 'axios';
import list from "../index"


function Formulario(params) {
    const Url2="http://127.0.0.1:8000/api/comment";
    useEffect( ()=>{
        //axios.post(Url2, list).then(response => {console.log(response);
        console.log(list)},[list])
    
    };
    
export default Formulario;