import { Component, AfterViewInit } from '@angular/core';
import * as ScrollMagic from 'scrollmagic';
import * as _ from 'underscore';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import { TimelineMax, Elastic, TweenMax, Power3 } from 'gsap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {

	_scrollMagic = new ScrollMagic.Controller();
	galleryItems = [
		{
			name: 'sketchy',
			img: 'j_paint_1.JPG',
			description: 'Wait wait wait wait, what\'s happening?'
		},
		{
			name: 'acid dancer',
			img: 'j_paint_2.png',
			description: 'Inspired by a rave scene.'
		},
		{
			name: 'freestyled octopus',
			img: 'j_paint_3.png',
			description: 'Spraypaint on drywall. When you rent an apartment, you\'re also renting a canvas.'
		},
		{
			name: 'blackbird',
			img: 'j_paint_4.jpg',
			description: 'birds fleeing from the alder forest on fire. Inspired by the Beatles.'
		},
		{
			name: 'lost in the forest',
			img: 'j_paint_5.jpg',
			description: 'A depiction of my brother drifting alone in life, bored, scared, and confused. I want to help the ones I love, but everything and everyone is telling me I need to get myself straight and it\'s a waist of time to reach out'
		},
		{
			name: 'dallas',
			img: 'j_paint_6.jpg',
			description: 'It all began when I saw my fathers landscape art, and the graffiti I did on the beach I grew up on.'
		},
		{
			name: 'disco',
			img: 'j_paint_7.png',
			description: 'Faith addiction.'
		},
		{
			name: 'DST',
			img: 'j_paint_9.jpg',
			description: 'spray paint on found materials'
		},
		{
			name: 'untitled abstraction',
			img: 'j_paint_10.jpg',
			description: 'Kind of looks like an ocean on fire.'
		},
		{
			name: 'study #1',
			img: 'j_paint_11.JPG',
			description: 'Old pencil study.'
		},
		{
			name: 'abstractions',
			img: 'j_paint_12.png',
			description: 'spray paint on found materials'
		},
		{
			name: 'meh',
			img: 'j_paint_13.jpg',
			description: 'Editor\'s note: We\'ve got just too many heads here.'
		},
		{
			name: 'self portrait',
			img: 'j_paint_14.jpg',
			description: 'I had a hard time with the truth growing up. Everything and everyone seemed nicer than it/they actually were.'
		},
		{
			name: 'study #2',
			img: 'j_paint_15.jpg',
			description: 'Ink study. Sleeping beauty'
		},
		{
			name: 'psychedelic phase',
			img: 'j_paint_16.jpg',
			description: 'I was dropping a lot of LSD at the time. The four pianists is a depiction of Animal Collective, a band I was inspired by at the time.'
		},
		{
			name: 'study #3',
			img: 'j_paint_18.jpg',
			description: 'Nude charcoal study.'
		},
		{
			name: '24',
			img: 'j_paint_21.jpg',
			description: 'Inspired by 24 hour party people.'
		},
		{
			name: 'magic matress ride',
			img: 'j_paint_23.jpg',
			description: 'Hedonism at its finest.'
		},
		{
			name: 'but a ghost',
			img: 'j_paint_22.jpg',
			description: 'Lost loves.'
		},
		{
			name: 'sun dropper',
			img: 'j_paint_24.jpg',
			description: 'Multimedia. Spray paint on drywall.'
		},
		{
			name: 'glorification of graffiti',
			img: 'j_paint_26.jpg',
			description: 'Sex sells.'
		},
		{
			name: 'surrealism.. I think?',
			img: 'j_paint_27.jpg',
			description: 'A depiction of my lack of knowledge of art/the art world.'
		},
		{
			name: 'setting sun',
			img: 'j_paint_28.jpg',
			description: 'An old drawing of my sister.'
		},
		{
			name: 'untitled',
			img: 'j_paint_29.jpg',
			description: 'This was a gift and a personal story.'
		},
		{
			name: 'no escape',
			img: 'j_paint_18.jpg',
			description: 'Interpretational abstraction.'
		},
		{
			name: 'chakras',
			img: 'j_paint_31.jpg',
			description: 'a spiritual time in my life, dabbling in meditation, and becoming more aware of my surroundings. And later dropping spirituality.'
		},
		{
			name: 'untitled',
			img: 'j_paint_32.jpg',
			description: 'this work was inspired by RJD2, Nightmares on wax, and DJ Shadow.'
		},
		{
			name: 'self portrait',
			img: 'j_paint_33.jpg',
			description: 'At the brink of giving up on it all, I manage to use that feeling to prove myself wrong and finally create something beautiful after a long hiatus.'
		},
		{
			name: 'Multimedia on glass',
			img: 'j_paint_34.jpg',
			description: `People\'s exterior characteristics are rarely a reality\;
the character they show on the surface may be a reflection of the
people they suround themselfs with, or a front disguising
its own opposite. A cold exterior may hide a person dying for warmth; a
repressed, calm type may actually be struggling to conceal uncontrollable emotions.`
		}
	];
	currentGalleryItem = 0;
	enableGallery = true;
	mobile: boolean = false;
	galleryItemClicked = false;

	constructor() {

		if($(window).innerWidth() < 600){
			this.mobile = true;
		}

		window.addEventListener("orientationchange", () => {


			//Gets height and width of where it came from, not to where it's going to.
			if(window.innerHeight < window.innerWidth){
				this.mobile = true;
			} else {
				this.mobile = false;
			}

		}, false);

	}


	ngAfterViewInit() {

		if(!this.mobile){
			let gallery = $('#wrapper-gallery');

		    gallery.on('wheel', (e) => {

	    		let oEvent: any = e.originalEvent,
	            delta  = oEvent.deltaY || oEvent.wheelDelta;

		        let ph = this.currentGalleryItem;

		        if (delta > 0 && this.currentGalleryItem != this.galleryItems.length-1 && this.enableGallery) {		      
		        	this.changeItem(++ph);
		        } else if (delta <= 0 && this.currentGalleryItem != 0 && this.enableGallery) {		        	
		        	this.changeItem(--ph);
		        }

		    });
		}		
		
	}

	changeItem(i:number){

		if(this.currentGalleryItem !== i && !this.mobile){

			this.enableGallery = false;
			
			let items = $('.gallery-items');
			let phc = $('#listItem' + i);
			let img = $('#img');
			let title = $('.title');
			let desc = $('.additional-info');

			let tl = new TimelineMax();

			tl
				.to(img, .5, {x: '-25px', opacity: 0, ease: Power3.easeout})
				.to(title, .5, {y: '-15px', opacity: 0, ease: Power3.easeout}, 0)
				.to(desc, .5, {x: '25px', opacity: 0, ease: Power3.easeout}, 0)
				.add(()=>{
					this.currentGalleryItem = i;
					tl.pause();
					setTimeout(()=>{
						tl.play();
					}, 250);
				})
				.add('end')
				.to(img, .5, {x: '0px', opacity: 1, ease: Power3.easeout}, 'end')
				.to(title, .5, {y: '0px', opacity: 1, ease: Power3.easeout}, 'end')
				.to(desc, .5, {x: '0px', opacity: 1, ease: Power3.easeout}, 'end')
				.add(()=>{
					this.enableGallery = true;
				});

			TweenMax.to(items, 1, {y: "-" + ((phc.innerHeight() + 25) * i) + "px"});

		} else if(this.currentGalleryItem !== i && this.mobile && i >= 0 && i <= this.galleryItems.length-1){

			this.enableGallery = false;
			
			let img = $('#img');

			let tl = new TimelineMax();

			tl
				.to(img, .5, {y: '-25px', opacity: 0, ease: Power3.easeout})
				.add(()=>{
					this.currentGalleryItem = i;
					tl.pause();
					setTimeout(()=>{
						tl.play();
					}, 250);
				})
				.add('end')
				.to(img, .5, {y: '0px', opacity: 1, ease: Power3.easeout}, 'end')
				.add(()=>{
					this.enableGallery = true;
				});

		}

	}

	highlightPiece(){

		console.log(this.mobile);

		if(!this.galleryItemClicked){

			this.galleryItemClicked = !this.galleryItemClicked;

			let overlay = $('.overlay');

			let tl = new TimelineMax();

			tl
				.to(overlay, .85, {opacity: 1, zIndex: 200});

		} else {

			let overlay = $('.overlay');

			let tl = new TimelineMax();

			tl
				.to(overlay, .85, {opacity: 0, zIndex: 0});

			setTimeout(()=>{
				this.galleryItemClicked = !this.galleryItemClicked;
			}, 850);
		}

		
	}

}
