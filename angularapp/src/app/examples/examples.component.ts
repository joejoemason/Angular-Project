import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['../examples/ecommerce/ecommerce.component.scss']
})
export class ExamplesComponent implements OnInit {
  doubleSlider = [1000, 5000];
  focus;

  data : Date = new Date();

  constructor() { }

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
