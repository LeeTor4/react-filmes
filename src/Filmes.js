import React, { Component, Fragment } from 'react';
import Header from './Header';

import DataTable from './DataTable'

class Filmes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filmes: [],
            titulo: 'Filme'
        }
    }

    

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Filmes</h1>
                    <DataTable dados={this.state.autores} titulo={this.state.titulo} colunas={['livro']} />

                </div>  
            </Fragment>
        );
    }
}
export default Filmes;