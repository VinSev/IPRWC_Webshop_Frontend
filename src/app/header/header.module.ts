import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {AppRoutingModule} from "../app-routing.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule
  ]
})
export class HeaderModule { }
