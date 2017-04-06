import { Component, OnInit } from '@angular/core';
import { Hero } from "app/hero";
import { HeroService } from "./hero.service";

@Component({
  selector: 'toh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})


export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }
}
