import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  camposForm: FormGroup;

  constructor(){
    this.camposForm = new FormGroup({
      nome: new FormGroup('', Validators.required),
      descricao: new FormGroup('', Validators.required)
    });
  }

  salvar(){
    console.log('Valores digitados: ', this.camposForm.value);
    console.log('Está válido? ', this.camposForm.valid)
  }
  
}
