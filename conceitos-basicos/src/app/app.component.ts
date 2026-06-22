import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './helloworld/helloworld.component';
import { MypaginaComponent } from "./mypagina/mypagina.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent, MypaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
