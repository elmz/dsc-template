import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { NgSimpleAlertModule } from '../../../ng-simple-alert/src/lib/ng-simple-alert.module';

import { DscAlertModule } from 'dsc-alert';
// import { DscAlertModule } from '../../../dsc-alert/src/lib/dsc-alert.module';
import { DscHeaderModule } from 'dsc-header';
import { DscPanelModule } from 'dsc-panel';
import { DscCalendarModule } from 'dsc-calendar';

import { DscCollapsibleListModule } from 'dsc-collapsible-list';

// import { DscHeaderModule } from 'dsc-header';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from "@clr/angular";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    ClarityModule,
    DscAlertModule,
    DscHeaderModule,
    DscPanelModule,
    DscCalendarModule,
    CommonModule,
    DscCollapsibleListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
