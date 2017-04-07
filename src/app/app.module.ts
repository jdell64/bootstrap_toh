import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroPowerComponent } from './hero-power/hero-power.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroService } from './services/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  declarations: [ // components and directives
    AppComponent, HeroDetailComponent, HeroPowerComponent, DashboardComponent, HeroesComponent, NavbarComponent
  ],
  imports: [ // modules
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule
  ],
  providers: [HeroService], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
