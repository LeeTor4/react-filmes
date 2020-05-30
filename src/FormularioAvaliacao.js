import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp';

class FormularioAvaliacao extends Component {

    constructor(props) {
        super(props);


            this.validador = new FormValidator([
            {
              campo: 'nome',
              metodo: 'isEmpty',
              validoQuando: false,
              mensagem: 'Entre com um avaliador'
            },
            { 
              campo: 'comentario',
              metodo: 'isEmpty',
              validoQuando: false,
              mensagem: 'Entre com um comentario'
            }
            ,
            { 
              campo: 'notaAvaliacao',
              metodo: 'isEmpty',
              validoQuando: false,
              mensagem: 'Entre com uma nota'
            }
          ]);

          this.stateInicial = {
            nome: '',
            comentario: '',
            notaAvaliacao: '',
            validacao: this.validador.valido()
        }

        this.state = this.stateInicial;
    }

    submitFormulario = () => {
        const validacao = this.validador.valida(this.state);
        if(validacao.isValid){
           
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        }else {
            const { nome, comentario, notaAvaliacao} = validacao;
            const campos = [nome, comentario, notaAvaliacao];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid
            });
            camposInvalidos.forEach(campo => {
                
                PopUp.exibeMensagem('error', campo.message);
            });
        }
        
        

    }


    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }


    render() {
        const { nome, comentario, notaAvaliacao } = this.state;
        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="titulo">Nome</label>
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="protagonista">Comentario</label>
                        <input
                            className="validate"
                            id="comentario"
                            type="text"
                            name="comentario"
                            value={comentario}
                            onChange={this.escutadorDeInput} />

                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="protagonista">Nota</label>
                        <input
                            className="validate"
                            id="nota"
                            type="text"
                            name="notaAvaliacao"
                            value={notaAvaliacao}
                            onChange={this.escutadorDeInput} />

                    </div>
                </div>

                <button onClick={this.submitFormulario} className="btn waves-effect waves-light indigo lighten-2" type="button">Salvar
                </button>
            </form>
        );
    }
}
export default FormularioAvaliacao
