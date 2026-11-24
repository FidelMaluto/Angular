import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';


@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
