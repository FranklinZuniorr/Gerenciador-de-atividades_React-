import './App.css';
import { BiCalendarCheck } from "react-icons/bi";
import foto_franklin from "./img/franklin.png"
import { useEffect, useState } from 'react';
import { ScrollArea } from '@mantine/core';
import Atividade from './componentes/Atividade';
import Categoria from './componentes/Categoria';

var categorias = [];

var atividades = {
  início: [],
};

var number = 0;

var select = "início";

function App() {

  const IcoReact = {
  width: "3.5rem",
  marginLeft: "1rem"
  };

  const [displayCat, setDisplayCat] = useState({
    mostra: categorias,
    mostra2: atividades[select],
  });

  function display(){
    setDisplayCat({
      mostra: categorias,
      mostra2: atividades[select],
  });
  };

  function dell(x, z){
    select = z;
    console.log(x)
    delete categorias[x];
    delete atividades[select];
    start();
    existe();
  }

  const [msgCt, setMsgCt] = useState("");
  const getText = event => {
    setMsgCt(event.target.value);
  };

  const [msgCt2, setMsgCt2] = useState("");
  const getText2 = event => {
    setMsgCt2(event.target.value);
  };

  const [obs, setObs] = useState({display: "none"});

  function existe(){

    if(atividades[select] == ""){
      setObs({display: "flex"});
    }

    else{
      setObs({display: "none"});
    }

  };

  function st(x){
    select = x;
    console.log(select);
    display();
    existe();
  };

  function start() {

    select = "início";
    console.log(select)

    existe();

    categorias[0] = <Categoria nmCategoria={"Início"} dell={dell} st={st}/>

    setDisplayCat({
     mostra: categorias,
     mostra2: atividades[select],
    })

  };

  useEffect(() => {start()}, [])

  return (

    <div className="display">

      <header>
        <div className="menu">
          <div className="titulo">
              <BiCalendarCheck size={50} color={"#333333"} style={{marginRight: "1rem"}}/>
              GERENCIADOR DE <br/> ATIVIDADES FR_ 
              <img src={foto_franklin} style={IcoReact}></img>
              <div style={{fontSize: "0.7rem", marginLeft: "0.5rem", width: "9rem"}}>Desenvolvido por Franklin Vieira Barbosa.</div>
          </div>
        </div>
      </header>

        <div className="fnc">

          <div style={{display: "flex", justifyContent: "space-between"}}>
            <input className="cat" type="text" onChange={getText} value={msgCt} placeholder="Nome da categoria" maxLength={15}/>

            <button className="btct" onClick={() => {

              atividades[msgCt] = [];

              select = msgCt;

              number++;

              categorias[categorias.length] = <Categoria nmCategoria={msgCt} dell={dell} st={st} number={number}/>

              console.log(atividades)
              
              setDisplayCat({
                mostra: categorias,
                mostra2: atividades[select],
              });

              existe();

            }}>
              
            <div className="texto">
              Add categoria
            </div>
            
            </button>
          </div>

          <div style={{display: "flex", justifyContent: "space-between"}}>
            <input className="atv" type="text" onChange={getText2} value={msgCt2} placeholder="Nome da atividade" maxLength={50}/>

            <button className="btat" onClick={() =>{

              atividades[select][atividades[select].length] = <Atividade/>;
              console.log(atividades)

              setDisplayCat({
                mostra: categorias,
                mostra2: atividades[select],
              });

              existe();

            }}>
              
            <div className="texto">
              Add atividade
            </div>

            </button>

          </div>

        </div>

        <div className="categorias">

        <ScrollArea style={{ width: "100%", height: "100%" }} type="always" scrollbarSize={6} scrollHideDelay={2500}>
          <div style={{ width: "100%", display: "flex", height: "3rem", alignItems: "center", paddingRight: "1rem"}}>
            {displayCat.mostra}
          </div>
        </ScrollArea>

        </div>

        <div className="mostrador">

        <div className="obs" style={obs}>
        Adicione alguma atividade!
        </div>
      
        <ScrollArea style={{ height: "22rem", width: "80%", paddingRight: "1rem", paddingLeft: "1rem" }} type="always" scrollbarSize={6} scrollHideDelay={2500}>
          {
            <div>
              {displayCat.mostra2}
            </div>
          }
        </ScrollArea>

        </div>

    <footer>

    <div className="footer">
      <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
        Todos os direitos reservados a <b>Gerenciador de atividades FR_</b></div>
      </div>
    
    </footer>
    </div>

  );
  
}



export default App;
