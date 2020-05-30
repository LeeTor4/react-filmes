import React, { Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import Tabela from './Tabela';
import Formulario from './Formulario';
import Header from './Header';
import PopUp from './PopUp';

import ServiceApi from './ServiceApi';



class App extends Component {

   constructor(props){
       super(props)

       this.state = {
        filmes: [],
        
      };

   }

  alteraFilme = id =>{
    const { filmes } = this.state;

    this.setState({
      filmes: filmes.filter((filme) => {
        return filme.id !== id;
      })
    })
    PopUp.exibeMensagem('success', "Filme alterado com sucesso");
    ServiceApi.alteraFilme(id);
  }
  removeFilme = id => {

    const { filmes } = this.state;

    this.setState({
      filmes: filmes.filter((filme) => {
        return filme.id !== id;
      })
    })
    PopUp.exibeMensagem('error', "Filme removido com sucesso");
    ServiceApi.RemoveFilme(id);
  }

  escutadorDeSubmit = filme => {

    ServiceApi.CriaFilme(filme)
       .then(res => res)
       .then(
           (filme) => {
             
              this.setState({ filmes: [...this.state.filmes, filme] });
              PopUp.exibeMensagem('success', "Autor adicionado com sucesso");
              
           }
       ); 
       
       
  }

  componentDidMount(){
    ServiceApi.ListaFilmes()
      .then(
          res => {
              console.log(res)
             this.setState({filmes: [...this.state.filmes,...res]});       
          }
      );

      
  }
  render() {
    let tabela;
    if(this.state.filmes.length > 0){
      tabela = <Tabela filmes={this.state.filmes} removeFilme={this.removeFilme} />;
    }
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Relação de Filmes</h1>
          {tabela}
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
