import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { NgSimpleAlertModule } from '../../../ng-simple-alert/src/lib/ng-simple-alert.module';

import { DscAlertModule } from 'dsc-alert';
// import { DscAlertModule } from '../../../dsc-alert/src/lib/dsc-alert.module';
import { DscHeaderModule } from '../../../dsc-header/src/lib/dsc-header.module';
import { DscPanelModule } from '../../../dsc-panel/src/lib/dsc-panel.module';
import { DscCalendarModule } from '../../../dsc-calendar/src/lib/dsc-calendar.module';

import { DscCollapsibleListModule } from '../../../dsc-collapsible-list/src/lib/dsc-collapsible-list.module';

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
