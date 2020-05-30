import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const TableHead = () => {
    return(
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Protagonista</th>
            <th>Média das avaliações</th>
            
            
          </tr>
        </thead>
    );
}


const TableBody = (props) =>{
    
   
    const linhas = props.filmes.map((linha,index)=>{
  
        return( 
            
            <tr key={index}>   
                    <td>{linha.titulo}</td>
                    <td>{linha.protagonista}</td>                        
                    <td>{linha.mediaAvaliacao} </td>                  
                    <td><button onClick={ () => props.removeFilme(linha.id)} className="waves-effect waves-light indigo lighten-2 btn">Remover</button></td>
                    <td><Link to={"/avaliacao/"+linha.id} className="waves-effect waves-light indigo lighten-2 btn"> Avaliar </Link> </td>
            </tr>
        );
    });

    return(
        <tbody>
          {linhas}
        </tbody>
    );
}


class Tabela extends Component{
   
    render(){
        const { filmes, removeFilme } = this.props;
      /*  console.log(filmes)*/
        return(
        <table className="centered highlight">
        <TableHead />
        <TableBody filmes={filmes} removeFilme = { removeFilme }/>
        </table>
        );
    }

}
export default Tabela;