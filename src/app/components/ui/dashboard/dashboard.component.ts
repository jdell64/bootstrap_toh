import { Component, OnInit } from '@angular/core';
import { HeroService } from "../../../services/hero.service";
import { Hero } from "app/hero";

@Component({
  selector: 'toh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  heroes: Hero[] = [];
  
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0, 5));
  }

}
