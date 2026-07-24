import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  // Salvar ou cadastrar clientes
  salvar(cliente: Cliente) {
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage))
  }

  // Atualizar/Editar clientes
  atualizar(cliente: Cliente) {
    const storage = this.obterStorage();

    storage.forEach(c => {
      if (c.id === cliente.id) {
        Object.assign(c, cliente);
      }
    });
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  // Deletar/Apagar clientes
  deletar(cliente: Cliente) {
    const storage = this.obterStorage();

    const novaLista = storage.filter(c => c.id !== cliente.id)
    
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(novaLista));
  }
  
  // Pesquisar clientes
  pesquisarClientes(nomeBusca: string): Cliente[] {

    const clientes = this.obterStorage();

    if (!nomeBusca) {
      return clientes;
    }

    // Filtragem
    return clientes.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1);

  }

  // Retornar os dados do id do cliente
  buscarClientePorId(id: string): Cliente | undefined {
    const clientes = this.obterStorage();
    return clientes.find(cliente => cliente.id === id)
  }

  // Guardar os dados no localStorage
  private obterStorage(): Cliente[] {
    const repoClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);

    if (repoClientes) {
      const clientes: Cliente[] = JSON.parse(repoClientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;

  }

}
