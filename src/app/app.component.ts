import { Component } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from "./services/hero.service";

@Component({
  selector: 'toh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tour of Heroes';
  
  constructor( ) {
    
  }

}
