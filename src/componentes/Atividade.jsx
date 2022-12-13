import './Atividade.css';

function Atividade({nmCategoria, dell2, number}) {

  console.log(number)
    return(
    <div className="atividade">
       <div className="texto_atv">
       {nmCategoria.toUpperCase()}
       </div>

       <button style={{cursor: "pointer"}} className="btfn">
            <div className="texto" onClick={() => {
              dell2(number);
            }}>
              Finalizar tarefa
            </div>
        </button>
    </div>
    );
}

export default Atividade;