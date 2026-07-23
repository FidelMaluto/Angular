import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {

  nomeBusca : string = '';

  listaClientes : Cliente[] = [];
  colunasTable : string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'email'];

  constructor(private service: ClienteService ) {

  }

  ngOnInit() {
    console.log("Passouuu..");
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar() {
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }
  
}
