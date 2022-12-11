import './Categoria.css';
import {FaTrash} from "react-icons/fa";
import { Alert } from '@mantine/core';

function Categoria({nmCategoria, dell, st, number}) {

    if(nmCategoria == "Início"){
        return(

            <div className="categoria">
        
            <div className="click" onClick={() => {
                st(nmCategoria.toLowerCase());
            }}>
        
            {nmCategoria.toUpperCase()}
        
            </div>
            </div>
        )
    }
    
    else{
    return(

        <div className="categoria">

            <div className="click" onClick={() => {
                st(nmCategoria.toLowerCase());
            }}>

        {nmCategoria.toUpperCase()}

        </div> 

        <FaTrash style={{marginLeft: "1rem", cursor: "pointer"}} onClick={() => {
            dell(number, nmCategoria);
        }}/>

        </div>
   );
   };

}

export default Categoria;
