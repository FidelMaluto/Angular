import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
    num1: number = 0;
    num2: number = 0;
    resultado: number = 0;

    calcularResultado(){
      console.log('Chamando a função da soma!');
      console.log('Valor 1: ', this.num1);
      console.log('Valor 2: ', this.num2);
      this.resultado = this.num1 + this.num2;
    }
}
