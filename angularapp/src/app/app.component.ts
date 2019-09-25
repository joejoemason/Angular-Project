import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {enableProdMode} from '@angular/core';
enableProdMode();


@Component({
    selector: 'app-root',
    templateUrl: '../app/examples/examples.component.html',
  	styleUrls: ['../app/examples/examples.component.scss']

  //from examples

  // selector: 'app-examples',
  // templateUrl: './examples.component.html',
  // styleUrls: ['./examples.component.scss']
})
export class AppComponent implements OnInit {
    //@ViewChild(NavbarComponent) navbar: NavbarComponent;
	@ViewChild(NavbarComponent, { static: false }) navbar: NavbarComponent;
	@Inject(DOCUMENT) private document: any;

  constructor(
		private _router: Subscription,
		private renderer: Renderer,
		private router: Router,
	  	private element: ElementRef,
	 	public location: Location
    ) { }
    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (this.location.path() !== '/sections') {
                if (window.outerWidth > 991) {
                    window.document.children[0].scrollTop = 0;
                }else{
                    window.document.activeElement.scrollTop = 0;
                }
            }
            this.navbar.sidebarClose();

            this.renderer.listenGlobal('window', 'scroll', (event) => {
                const number = window.scrollY;
                var _location = this.location.path();
                _location = _location.split('/')[2];
                if (this.location.path().split('#')[0] !== '/sections') {

                    if (number > 150 || window.pageYOffset > 150) {
                        // add logic
                          if (_location !== 'register') {
                                navbar.classList.remove('navbar-transparent');
                          }
                    } else if (_location !== 'addproduct'  && _location !== 'login' && _location !== 'register' && this.location.path() !== '/nucleoicons') {
                        // remove logic
                        navbar.classList.add('navbar-transparent');
                    }
                }
            });
        });

        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }

    }
    removeFooter() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(titlee === 'signup' || titlee === 'nucleoicons'){
            return false;
        }
        else {
            return true;
        }
    }
}
