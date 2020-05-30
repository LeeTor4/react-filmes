import React, { Component } from 'react';


const TableHead = () => {
    return(
        <thead>
          <tr>
            <th>Nome</th>
            <th>Comentario</th>
            <th>Nota de Avaliação</th>
          </tr>
        </thead>
    );
}

const TableBody = (props) =>{
    
 
  const linhas = props.avaliacoes.map((linha,index)=>{
     
      return( 

          <tr key={index}>
                 
                  <td>{linha.nome}</td>
                  <td>{linha.comentario}</td>                        
                  <td>{linha.notaAvaliacao} </td>                  
                 
          </tr>
      );
  });

  return(
      <tbody>
        {linhas}
      </tbody>
  );
}

class TabelaAvaliadores extends Component{
   
  render(){
      const { avaliacoes, removeAvaliacao } = this.props;
   
      return(
      <table className="centered highlight">
      <TableHead />
      <TableBody avaliacoes={avaliacoes} removeAvaliacao = { removeAvaliacao }/>
      </table>
      );
  }

}

export default TabelaAvaliadores;