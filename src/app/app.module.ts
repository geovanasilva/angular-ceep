import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormNovoCartaoComponent } from './form-novo-cartao/form-novo-cartao.component';
import { MuralComponent } from './mural/mural.component';


@NgModule({
  declarations: [
    AppComponent,
    FormNovoCartaoComponent,
    MuralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
