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

  // Pesquisar clientes
  pesquisarClientes(nome: string) : Cliente[] {
    return this.obterStorage();
  }

  // Guardar os dados no localStorage
  private obterStorage() : Cliente[] {
    const repoClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);

    if(repoClientes) {
      const clientes : Cliente[] = JSON.parse(repoClientes);
      return clientes;
    }

    const clientes : Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
    
  }
  
}
