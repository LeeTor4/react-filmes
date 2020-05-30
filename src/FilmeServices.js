import ServiceApi from './ServiceApi'

class FilmeService {

    getAll() {
        return ServiceApi.ListaFilmes();
      }
    
      create(data) {
        return ServiceApi.CriaFilme("/filmes", data);
      }
    
      delete(id) {
        return ServiceApi.RemoveFilme(`/filmes/${id}`);
      }

}

export default new FilmeService();