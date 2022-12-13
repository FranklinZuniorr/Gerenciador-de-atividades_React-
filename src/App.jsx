import './App.css';
import { BiCalendarCheck } from "react-icons/bi";
import foto_franklin from "./img/franklin.png"
import { useEffect, useState } from 'react';
import { ScrollArea } from '@mantine/core';
import Atividade from './componentes/Atividade';
import Categoria from './componentes/Categoria';
import { useRef } from 'react';

var categorias = [];
var categoriasS = []; 

var atividades = {
  início: [],
};

var atividadesS = {
  início: [],
};

var select = "início";

var test = 0;

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
    alert(select)
    categorias.splice(x, 1)
    delete atividades[select];
    categoriasS.splice(x, 1)
    delete atividadesS[select];
    console.log(categoriasS)
    console.log(atividadesS)
    localStorage.setItem("categorias", JSON.stringify(categoriasS))
    localStorage.setItem("atividades", JSON.stringify(atividadesS))

    start();
    existe();
  };

  //Apaga as atividades.

  function dell2(x){
    console.log(atividades[select][x])
    delete atividades[select][x]
    console.log(x)
    console.log(atividades[select])
    console.log(atividades[select][x])

    display();
    existe();

    var filtro = [];
    console.log("tamanho:" + atividades[select].length);

    for(var a = 0; a < atividades[select].length; a++){

      filtro[a] = "" + atividades[select][a];
      console.log(filtro);

    };

    for(var b = 0; b < filtro.length; b++){

      if(filtro[b].toString() == "undefined"){
        test++;
        console.log("test:" + test + " filtro:" + filtro.length);
      }
      
      else if(filtro[b].toString() != "undefined"){
        test = 0;
      }
    };

    if(test >= filtro.length){
      atividades[select] = [];
      existe();
      localStorage.setItem("atividades", atividades);
    };

  };
  //Apaga as atividades.

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
    
    

    if(localStorage.getItem("categorias") == undefined){
    
    select = "início";
    console.log(select)

    categorias[0] = <Categoria nmCategoria={"Início"} dell={dell} st={st} seleciona={seleciona}/>

    existe();

    setDisplayCat({
     mostra: categorias,
     mostra2: atividades[select],
    })
    }

    else if(localStorage.getItem("categorias") != undefined){

      categoriasS = JSON.parse(localStorage.getItem("categorias"));
      atividades = JSON.parse(localStorage.getItem("atividades"));
      atividadesS = JSON.parse(localStorage.getItem("atividades"));

      for(var x = 0; x < categoriasS.length; x++){
        
        categorias[x] = <Categoria nmCategoria={categoriasS[x]} number={x} dell={dell} st={st} seleciona={seleciona}/>

      };

      console.log(categoriasS)
      console.log(atividadesS)
      console.log(categorias)

      select = "início";
      console.log(select)

      existe();

      setDisplayCat({
        mostra: categorias,
        mostra2: atividades[select],
       })
    };

  };
  
  const [id, setId] = useState({
    backgroundColor: "green",
    width: "63px",
    height: "0.2rem",
    position: "relative",
    left: "16px",
    top: "2.3rem",
    borderBottomRightRadius: "1rem",
    borderBottomLeftRadius: "1rem",
    zIndex: "1",
  });

  function seleciona(a = "63px", b = "16px"){
    setId({
      backgroundColor: "green",
      width: "1rem",
      height: "1rem",
      position: "relative",
      width: a,
      height: "0.2rem",
      left: b,
      top: "2.3rem",
      borderBottomRightRadius: "1rem",
      borderBottomLeftRadius: "1rem",
      zIndex: "1"

    });

  };

  useEffect(() => {start()}, [])

  //Referências dos elementos.
  const ref = {
    categoria: useRef(null),
    atividade: useRef(null), 
  }

  const focuss = (x) => {
    x.current.focus();
  };
  //Referências dos elementos.

  return (

    <div className="display">

      <header>
        <div className="menu">
          <div className="titulo">
              <BiCalendarCheck size={50} color={"#333333"} style={{marginRight: "0.5rem"}}/>
              GERENCIADOR DE <br/> ATIVIDADES FR_ 
              <img src={foto_franklin} style={IcoReact}></img>
              <div style={{fontSize: "0.7rem", marginLeft: "0.5rem", width: "9rem"}}>Desenvolvido por Franklin Vieira Barbosa.</div>
          </div>
        </div>
      </header>

        <div className="fnc">

          <div style={{display: "flex", justifyContent: "space-between"}}>
            <input ref={ref.categoria} className="cat" type="text" onChange={getText} value={msgCt} placeholder="Nome da categoria" maxLength={15}/>

            <button style={{cursor: "pointer"}} className="btct" onClick={() => {

              setMsgCt("");
              focuss(ref.categoria);

              if(atividades[msgCt.toLowerCase()] == undefined && msgCt != ""){

              atividades[msgCt.toLowerCase()] = [];
              atividadesS[msgCt.toLowerCase()] = [];
              localStorage.setItem("atividades", JSON.stringify(atividadesS));

              categorias[categorias.length] = <Categoria nmCategoria={msgCt} dell={dell} st={st} number={categorias.length} seleciona={seleciona}/>
              categoriasS[0] = "Início";
              categoriasS[categoriasS.length] = msgCt;
              localStorage.setItem("categorias", JSON.stringify(categoriasS));

              console.log(atividades)
              console.log(atividadesS)
              
              setDisplayCat({
                mostra: categorias,
                mostra2: atividades[select],
              });

              existe();

            };

            }}>
              
            <div className="texto">
              Add categoria
            </div>
            
            </button>
          </div>

          <div style={{display: "flex", justifyContent: "space-between"}}>
            <input ref={ref.atividade} className="atv" type="text" onChange={getText2} value={msgCt2} placeholder="Nome da atividade" maxLength={50}/>

            <button style={{cursor: "pointer"}} className="btat" onClick={() =>{

              setMsgCt2("");
              focuss(ref.atividade);

              if(msgCt2 != ""){

              atividades[select][atividades[select].length] = <Atividade nmCategoria={msgCt2} dell2={dell2} number={atividades[select].length}/>;
              console.log(atividades)

              setDisplayCat({
                mostra: categorias,
                mostra2: atividades[select],
              });

              existe();

              localStorage.setItem("atividades", atividades);

              console.log(atividades)
              }

            }}>
              
            <div className="texto">
              Add atividade
            </div>

            </button>

          </div>

        </div>

        <div className="categorias">

        <ScrollArea style={{ width: "100%", height: "100%" }} type="always" scrollbarSize={6} scrollHideDelay={2500}>
          <div style={id}/>
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
      <div style={{display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center"}}>
        <b>Desenvolvido por Franklin Vieira Barbosa.</b></div>
      </div>
    
    </footer>
    </div>

  );
  
}



export default App;
