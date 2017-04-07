import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroPowerComponent } from './hero-power/hero-power.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroService } from './hero/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [ // components and directives
    AppComponent, HeroComponent, HeroDetailComponent, HeroPowerComponent, DashboardComponent
  ],
  imports: [ // modules
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [HeroService], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
