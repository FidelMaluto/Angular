import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
    num1: number = 0;
    num2: number = 0;
    resultado: number = 0;

    calcularResultado(){
      console.log('Chamando a função da soma!');
      this.resultado = this.num1 + this.num2;
    }
}
