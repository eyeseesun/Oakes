import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { TimelineMax, TweenMax, Power3 } from 'gsap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

	@Output() home = new EventEmitter(); 
	@Output() gallery = new EventEmitter();
	@Output() about = new EventEmitter();

	navTo: string = '';

	menuIsExpanded: boolean = false;
	menuAnimation = new TimelineMax({paused: true});
	navigationAnimation = new TimelineMax({paused: true});
	homeAnimation = new TimelineMax({paused: true});
	socialAnimation = new TimelineMax({paused: true});
	aboutAnimation = new TimelineMax({paused: true});
	workAnimation = new TimelineMax({paused: true});
	contactAnimation = new TimelineMax({paused: true});

	menuWidth;
	positiveMenuWidth

	constructor() { }

	ngAfterViewInit() {

		let menuArea = $('.expanded-menu');
		let burger = $('.fa-bars');
		let socialContainer = $('.social-container');
		let menuContent = $('.menu-content');

		let home = $('.home');
		let homeUnderline = $('.homeUnderline');
		let about = $('.about');
		let aboutUnderline = $('.aboutUnderline');
		let work = $('.work');
		let workUnderline = $('.workUnderline');
		let contact = $('.contact');
		let contactUnderline = $('.contactUnderline');

		this.menuWidth = "-" + menuArea.innerWidth() + "px";
		this.positiveMenuWidth = menuArea.innerWidth() + "px";

		window.addEventListener("orientationchange", () => {

			setTimeout(()=>{

				this.menuWidth = "-" + $('.expanded-menu').innerWidth() + "px";
				this.positiveMenuWidth = $('.expanded-menu').innerWidth() + "px";

				let tm = new TimelineMax();

				tm
					.to($('.expanded-menu'), 0, {right: this.menuWidth});

			}, 10)

		}, false);

		this.menuAnimation
			.to(menuArea, .35, {right: '0px'}, 'open')
			.addPause()
			.to(menuArea, .35, {right: this.menuWidth}, 'close')
			.call(()=>{
				this.menuAnimation.restart();
				this.menuAnimation.pause();
			});

		this.navigationAnimation
			.to(menuContent, .25, {opacity: 0, delay: .15})
			.to(menuArea, .50, {right: '0vw', width: '100vw', ease: Power3.easein})
			.call(()=>{
				if(this.navTo == 'gallery'){
					this.gallery.emit();	
				} else if(this.navTo == 'about'){
					this.about.emit();
				} else if(this.navTo == 'home'){
					this.home.emit();
				}
				
			})
			.to(menuArea, .50, {right: '100vw', width: '0vw', delay: .15, ease: Power3.easein})
			.set(menuArea, {right: this.menuWidth, width: this.positiveMenuWidth})
			.set(menuContent, {opacity: 1})
			.call(()=>{
				this.navigationAnimation.restart();
				this.navigationAnimation.pause();
				this.menuAnimation.restart();
				this.menuAnimation.pause();
			});

		this.socialAnimation
			.add('show')
			.to(socialContainer, 0, {opacity: 1}, 'show')
			.from(socialContainer, 0.35, {left: '300px'}, 'show');

		this.homeAnimation
			.add('home')
			.to(homeUnderline, .35, {width: '30%'}, 'home');

		home.hover(()=>{
			this.homeAnimation.play();
		}, ()=>{
			this.homeAnimation.reverse();
		})

		this.aboutAnimation
			.add('about')
			.to(aboutUnderline, .35, {width: '30%'}, 'about');

		about.hover(()=>{
			this.aboutAnimation.play();
		}, ()=>{
			this.aboutAnimation.reverse();
		})

		this.workAnimation
			.add('work')
			.to(workUnderline, .35, {width: '30%'}, 'work');

		work.hover(()=>{
			this.workAnimation.play();
		}, ()=>{
			this.workAnimation.reverse();
		})

		this.contactAnimation
			.add('contact')
			.to(contactUnderline, .35, {width: '30%'}, 'contact');

		contact.hover(()=>{
			this.contactAnimation.play();
		}, ()=>{
			this.contactAnimation.reverse();
		})

	}

	toggleMenu(){
		this.menuAnimation.play();
	}

	contactInfo(){
		this.socialAnimation.play();
	}

	buildUnderlineAnimation(anchor: string){
		let selector = $('.' + anchor);
		let underline = $('.' + anchor + 'Underline');
	}

	navToGall(){
		this.navTo = 'gallery';
		this.navigationAnimation.play();
	}

	navToAbout(){
		this.navTo = 'about';
		this.navigationAnimation.play();
	}

	navToHome(){
		this.navTo = 'home';
		this.navigationAnimation.play();
	}

}
