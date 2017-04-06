import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toh-hero-power',
  templateUrl: './hero-power.component.html',
  styleUrls: ['./hero-power.component.scss']
})
export class HeroPowerComponent implements OnInit {
  @Input()
  value: number;
  constructor() { 
    this.value = 0;
  }

  ngOnInit() {
  }

  incrementValue(): void {
    this.value++;
  }
  
  decrementValue(): void {
    this.value--;
  }

}
