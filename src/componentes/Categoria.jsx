import './Categoria.css';
import {FaTrash} from "react-icons/fa";
import { Alert } from '@mantine/core';
import { useCallback, useState } from 'react';
import { useRef } from 'react';

function Categoria({nmCategoria, dell, st, number, seleciona}) {

    const inputRef = useRef();

    if(nmCategoria == "Início"){
        return(

            <div ref={inputRef} className="categoria" >
            
            <div className="click" onClick={() => {
                seleciona(inputRef.current.offsetWidth, inputRef.current.offsetLeft);
                st(nmCategoria.toLowerCase());
            }}>
        
            {nmCategoria.toUpperCase()}
        
            </div>
            </div>
        )
    }
    
    else{
    return(

        <div ref={inputRef} className="categoria">

            <div className="click" onClick={() => {
                seleciona(inputRef.current.offsetWidth, inputRef.current.offsetLeft);
                st(nmCategoria.toLowerCase());
            }}>

        {nmCategoria.toUpperCase()}

        </div> 

        <FaTrash style={{marginLeft: "1rem", cursor: "pointer"}} onClick={() => {
            seleciona();
            dell(number, nmCategoria);
        }}/>

        </div>
   );
   };

}

export default Categoria;
