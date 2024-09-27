import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-validtions',
  templateUrl: './validtions.component.html',
  styleUrls: ['./validtions.component.scss']
})
export class ValidtionsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // On Login link click
	onLogin() {
	  this.router.navigate(['rfq'], { relativeTo: this.route.parent });
	}

}
