import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	page: Array<boolean> = [
		true,
		false,
		false
	]

	navToHome(){
		for(let i = 0; i < this.page.length; i++){
			this.page[i] = false;
		}

		this.page[0] = true;
	}

	navToGallery(){
		for(let i = 0; i < this.page.length; i++){
			this.page[i] = false;
		}

		this.page[1] = true;
	}

	navToAbout(){
		for(let i = 0; i < this.page.length; i++){
			this.page[i] = false;
		}

		this.page[2] = true;
	}

}
