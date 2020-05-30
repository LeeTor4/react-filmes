import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp';

class Formulario extends Component {

    constructor(props) {
        super(props);

            this.validador = new FormValidator([
            {
              campo: 'titulo',
              metodo: 'isEmpty',
              validoQuando: false,
              mensagem: 'Entre com um titulo'
            },
            { 
              campo: 'protagonista',
              metodo: 'isEmpty',
              validoQuando: false,
              mensagem: 'Entre com um protagonista'
            }
          ]);

          this.stateInicial = {
            titulo: '',
            protagonista: '',
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
            const { titulo, protagonista} = validacao;
            const campos = [titulo, protagonista];
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
        const { titulo, protagonista } = this.state;
        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="titulo">Titulo</label>
                        <input
                            className="validate"
                            id="titulo"
                            type="text"
                            name="titulo"
                            value={titulo}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="protagonista">Protagonista</label>
                        <input
                            className="validate"
                            id="protagonista"
                            type="text"
                            name="protagonista"
                            value={protagonista}
                            onChange={this.escutadorDeInput} />

                    </div>
                </div>

                <button onClick={this.submitFormulario} className="btn waves-effect waves-light indigo lighten-2" type="button">Salvar
                </button>
            </form>
        );
    }
}
export default Formulario
