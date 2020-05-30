import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ServiceApi from '../../ServiceApi'

const listaFilmes = () => {
return(
    getAll() {
        FilmeService.getAll()
          .then(res => this.setState({
            filmes: res.data
          }))
          .catch(err => console.log);
      }

  )
      
}    
export default listaFilmes