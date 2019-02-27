import { TwoWayDataBindingModule } from './two-way-data-binding/two-way-data-binding.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TwoWayDataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
