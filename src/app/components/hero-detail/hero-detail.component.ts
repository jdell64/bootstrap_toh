import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'
import { Hero } from "app/hero";
import { HeroService } from "../../services/hero.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'toh-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  loading: boolean = true
  onLoad() {
    this.loading = false;
  }

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.update(this.hero)
    .then(() => this.goBack())
  }

}
