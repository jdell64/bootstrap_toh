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
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroService } from './services/hero.service';
import { LoadingImgDirective } from './directives/loading-img.directive';
import { HeroSearchService } from './services/hero-search.service';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { HeroPowerComponent } from "./components/hero-power/hero-power.component";
import { DashboardComponent } from "./components/ui/dashboard/dashboard.component";
import { SpinnerImgComponent } from "./components/ui/spinner-img/spinner-img.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { NavbarComponent } from "./components/ui/navbar/navbar.component";

@NgModule({
  declarations: [ // components and directives
    AppComponent, HeroDetailComponent, HeroPowerComponent, DashboardComponent,
    HeroesComponent, NavbarComponent, LoadingImgDirective, SpinnerImgComponent, HeroSearchComponent
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
  providers: [HeroService, HeroSearchService], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
