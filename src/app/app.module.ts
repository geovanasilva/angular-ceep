import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormNovoCartaoComponent } from './app.components/form-novo-cartao/form-novo-cartao.component';


@NgModule({
  declarations: [
    AppComponent,
    FormNovoCartaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
