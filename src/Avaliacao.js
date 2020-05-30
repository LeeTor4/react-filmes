import React, { Component, Fragment } from 'react';
import Header from './Header';

import TabelaAvaliadores from './TabelaAvaliadores';
import FormularioAvaliacao from './FormularioAvaliacao';
import PopUp from './PopUp';

import ServiceApi from './ServiceApi';


class Avaliacao extends Component {

    constructor(props) {
        super(props);
        console.log(props) 
        this.state = {
            avaliacoes: [],
           
        }
    }  

    escutadorDeSubmit = (avaliacao) => {

      ServiceApi.CriaAvaliacao(avaliacao,this.props.match.params.id)
         .then(res => res)
         .then(
             () => {
               
                this.setState({ avaliacoes: [...this.state.avaliacoes, avaliacao] });
                PopUp.exibeMensagem('success', "Avaliação adicionado com sucesso");
             }
         );    
    }
    
    componentDidMount(){
        
        ServiceApi.ListaAvaliacao(this.props.match.params.id)
          .then(
              res => {
                 this.setState({avaliacoes: [...this.state.avaliacoes,...res]});       
              }
          );    
      }
    render() {
        let tabela;
        if(this.state.avaliacoes.length > 0){
          tabela = <TabelaAvaliadores avaliacoes={this.state.avaliacoes} removeAvaliacao={this.removeAvaliacao} />;
        }
        return (
          <Fragment>
            <Header />
            <div className="container mb-10">
              <h1>Relação Avaliações</h1>
              {tabela}
              <FormularioAvaliacao escutadorDeSubmit={this.escutadorDeSubmit} />
            </div>
          </Fragment>
        );
    }
}
export default Avaliacao;