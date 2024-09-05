import { Component, OnInit, ViewChild } from '@angular/core';
import * as chartsData from '../../shared/data/default-dashboard';

import ApexCharts from 'apexcharts/dist/apexcharts.common.js';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit(): void {
    console.log(' -- ngOnInit  DigitalMarketingComponent ')
    //$.getScript("./assets/js/digital-marketing.js");
    //$.getScript("./assets/js/alternate-dashboard.js");
    
  }

}
