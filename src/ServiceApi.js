const ServiceApi = {
  ListaFilmes: () =>{
      return fetch('http://localhost:8080/filmes/', )
          .then(res => res.json());
  },

  CriaFilme: filme =>{
      return fetch('http://localhost:8080/filmes/', {method: 'POST',headers: {'content-type': 'application/json'}, body: 
      JSON.stringify(filme)})
      .then(res => res.json());
  },
  RemoveFilme : id => {
    return fetch(`http://localhost:8080/filmes/${JSON.stringify(id)}`, {method: 'DELETE', Headers: {'content-type': 'application/json'}});
  },
  AlterarFilme : id => {
    return fetch(`http://localhost:8080/filmes/${JSON.stringify(id)}`, {method: 'PUT', Headers: {'content-type': 'application/json'}});
  },
  CriaAvaliacao: (avaliacao, id) =>{
    return fetch(`http://localhost:8080/filmes/${id}/avaliacao`, {method: 'POST',headers: {'content-type': 'application/json'}, body: 
    JSON.stringify(avaliacao)});
  },
  ListaAvaliacao: id =>{
    return fetch(`http://localhost:8080/filmes/${id}/avaliacao`,)
        .then(res => res.json());
  }
}
export default ServiceApi;