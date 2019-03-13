import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	mobile: boolean = false;

	constructor() {
		if($(window).innerWidth() < 600){
			this.mobile = true;
		}
	}

	ngOnInit() {
	}

}
