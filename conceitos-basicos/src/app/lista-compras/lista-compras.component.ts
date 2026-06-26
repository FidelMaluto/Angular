import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListaItem } from './lista-item';

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule ],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  item: string = '';
  lista: ListaItem[] = [];

  adicionarItem(){
    let listaItem = new ListaItem();
    listaItem.nome = this.item;
    listaItem.id = this.lista.length + 1;

    this.lista.push(listaItem);
 
    this.item = '';
    console.table(this.lista);
  }
      
}
