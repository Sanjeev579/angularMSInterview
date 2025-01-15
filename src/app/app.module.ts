import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrimInputDirective } from './directives/trim-input.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TrimInputDirective,
    DashboardComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
