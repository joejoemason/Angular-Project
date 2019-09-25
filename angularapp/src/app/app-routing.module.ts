import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { ImageUploadModule } from './shared/image-upload/image-upload.module';


// import { ComponentsComponent } from './components/components.component';
// import { SectionsComponent } from './sections/sections.component';
// import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { LandingComponent } from './examples/landing/landing.component';

import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';


const routes: Routes =[
    { path: '', redirectTo: 'examples/examples.component.html', pathMatch: 'full' },
    // { path: 'components',           component: ComponentsComponent },
    // { path: 'sections',             component: SectionsComponent },
    // { path: 'nucleoicons',          component: NucleoiconsComponent },
    // { path: 'examples/aboutus',     component: AboutusComponent },
    // { path: 'examples/contactus',   component: ContactusComponent },
    { path: 'examples/ecommerce',   component: EcommerceComponent },
     { path: 'landing',  component: LandingComponent },
    // { path: 'examples/login',       component: LoginComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,{
          useHash: true
        }),
        NgbModule,
        TagInputModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AngularMultiSelectModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        }),
        ImageUploadModule
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
