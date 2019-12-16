import { Component, ViewEncapsulation } from '@angular/core';
import { DscAlertService } from 'dsc-alert';
import { menuContent } from './menu'
// import {DscAlertService} from '../../../dsc-alert/src/lib/dsc-alert.service';
import { single } from './data';
import { DscMainModel } from 'dsc-collapsible-list/lib/dsc-collapsible-list.model';
import { pieSingle } from './piechart-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'DSC Template Showcase';
  menuList: DscMainModel[];
  singleDate: Date;
  dateFrom: Date;
  dateTo: Date;
  dateInput: string;

  headerOptions: any = {
    username: "Elmer",
    title: "DSC Template NPM",
    url: "assets/dell-white-logo.png"
  }

  panelChartOptions: any = {
    header: "Bar Chart",
    view: [400, 300],
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: true,
    legendPosition: "below",
    showXAxisLabel: true,
    xAxisLabel: 'Country',
    showYAxisLabel: true,
    showDataLabel: true,
    yAxisLabel: 'Population',
    colorScheme: {
      domain: ['#093352', '#0f5b94', '#1572b7', '#2091e4']
    },
    pieChartBool: false,
    barChartBool: true,
    panelData: single
  }

  panelChartOptions2: any = {
    header: "Pie Chart",
    view: [400, 300],
    showLegend: true,
    legendPosition: "below",
    showLabels: true,
    colorScheme: {
      domain: ['#093352', '#0f5b94', '#1572b7', '#2091e4', '#368ccc']
    },
    pieChartBool: true,
    barChartBool: false,
    panelData: pieSingle
  }

  constructor(private alertService: DscAlertService) {
  }

  public createSuccessMessage(): void {
    this.alertService.createSuccessAlert('Sample success message');
  }

  public createDangerMessage(): void {
    this.alertService.createDangerAlert('Sample danger message');
  }

  public createWarningMessage(): void {
    this.alertService.createWarningAlert('Sample warning message');
  }

  public createInfoMessage(): void {
    this.alertService.createInfoAlert('Sample info message');
  }

  //to receive the output from the dsc calendar child
  onUpdatedDate(returnDates) {
    console.log(returnDates);
    if (returnDates.type == 'single')
      this.dateInput = returnDates.singleDate;
    else if (returnDates.type == "range")
      this.dateInput = returnDates.fromDateString + " - " + returnDates.toDateString;
  }

  ngOnInit() {
    this.menuList = menuContent;
  }
}
