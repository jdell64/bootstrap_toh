import { Component, OnInit } from '@angular/core';
import { Hero } from "app/hero";
import { HeroService } from "./hero.service";
import { Router } from "@angular/router";

@Component({
  selector: 'toh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})


export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
