import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { CounterComponent } from './components/counter.component';
import { FormComponent } from './components/form.component';
import { ChildComponent } from './components/child.component';
import { StyleComponent } from './directives/style.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    FormComponent,
    ChildComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    FormComponent
  ]
})
export class AppModule { }
