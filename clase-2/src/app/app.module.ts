import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContenedorModule } from './components/contenedor/contenedor.module'; // Importa el módulo del componente ContenedorComponent

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContenedorModule // Importa el módulo del componente ContenedorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
