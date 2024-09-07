import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rfqs',
  templateUrl: './rfqs.component.html',
  styleUrls: ['./rfqs.component.scss']
})
export class RfqsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(' -- ngOnInit  RfqsComponent ');

    //$.getScript("./assets/js/e-commerce-dashboard.js");
  }

}
