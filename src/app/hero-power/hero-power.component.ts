import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'toh-hero-power',
  templateUrl: './hero-power.component.html',
  styleUrls: ['./hero-power.component.scss']
})
export class HeroPowerComponent implements OnInit, OnChanges {
  @Input()
  value: number;

  @Output()
  valueChange = new EventEmitter<number>();

  constructor() {

  }

  ngOnChanges(changes) { // lifestyle hooks
    console.log(changes, this.value);
    this.value = this.value || 0;
  }

  ngOnInit() {
    //  this.value = this.value || 0;
  }

  

  incrementValue(): void {
    this.value++;
    this.valueChange.emit(this.value);
  }

  decrementValue(): void {
    this.value--;
    this.valueChange.emit(this.value);
  }

}
