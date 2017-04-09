import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroPowerComponent } from './hero-power/hero-power.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroService } from './services/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerImgComponent } from './spinner-img/spinner-img.component';
import { LoadingImgDirective } from './directives/loading-img.directive';

@NgModule({
  declarations: [ // components and directives
    AppComponent, HeroDetailComponent, HeroPowerComponent, DashboardComponent,
    HeroesComponent, NavbarComponent, LoadingImgDirective, SpinnerImgComponent
  ],
  imports: [ // modules
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    NgbModule.forRoot(),
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
  providers: [HeroService], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
