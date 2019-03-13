import { Component, AfterViewInit} from '@angular/core';
import * as ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import { TimelineMax, Elastic, TweenMax } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

	_sm = new ScrollMagic.Controller();

	constructor() { }

	ngAfterViewInit() {

	}

}
