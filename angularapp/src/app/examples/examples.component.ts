import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['../examples/ecommerce/ecommerce.component.scss']
})
export class ExamplesComponent implements OnInit {
	  doubleSlider = [1000, 5000];
	  focus;

	data: Date = new Date();
	items: any = [];

	constructor() {
		this.items = [
			{
				image: "assets/img/oldNavyDress.jpg",
				title: "Old Navy Dress",
				description: "Impeccably tailored in Italy from lightweight navy wool.",
				price: 300
			},
			{
				image: 'assets/img/oldNavyMensPolo.jpg',
				title: 'Old Navy Mens Polo',
				description: 'Immaculate tailoring is TOM FORD\'s forte.',
				price: 879
			},
			{
				image: 'assets/img/wooyoungmi.jpg',
				title: 'Wooyoungmi',
				description: ' Dark-grey slub wool, pintucked notch lapels.',
				price: 555
			},{
				image: 'assets/img/sweeney.jpg',
				title: 'Thom Sweeney',
				description: 'It\'s made from lightweight grey wool woven.',
				price: 680
			},
			{
				image: 'assets/img/kingsman.jpg',
				title: 'Kingsman',
				description: 'Item description',
				price: 10.00
			},
			{
				image: 'assets/img/boglioli.jpg',
				title: 'Boglioli',
				description: 'My item description',
				price: 25.99
			}
	  	];

  }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('ecommerce-page');
    var navbar = document.getElementsByTagName('nav')[0];
	navbar.classList.add('navbar-transparent');



  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('ecommerce-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
}

}
