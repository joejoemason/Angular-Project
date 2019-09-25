import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EcommerceComponent } from '../app/examples/ecommerce/ecommerce.component';
import { ExamplesComponent } from '../app/examples/examples.component';




//Imports from examples

import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { ImageUploadModule } from '../app/shared/image-upload/image-upload.module';
import { Subscription } from 'rxjs/Subscription';


@NgModule({
    declarations: [
        AppComponent,
    NavbarComponent,
  ],

    imports: [
      BrowserAnimationsModule,
      CommonModule,
      TagInputModule,
      JwBootstrapSwitchNg2Module,
      AngularMultiSelectModule,
        NgbModule,
        FormsModule,
        RouterModule,
      AppRoutingModule,
      NouisliderModule,
        ComponentsModule,
      ExamplesModule,
      AgmCoreModule.forRoot({
        apiKey: 'YOUR_KEY_HERE'
    }),
      ImageUploadModule
    ],
    providers: [Subscription],
    bootstrap: [AppComponent]
})
export class AppModule { }
