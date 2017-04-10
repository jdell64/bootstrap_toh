import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toh-spinner-img',
  templateUrl: './spinner-img.component.html',
  styleUrls: ['./spinner-img.component.scss']
})
export class SpinnerImgComponent implements OnInit {

  @Input() imgSrc: String;
  @Input() spinnerSrc: String;
  @Input() imgContainerClass: String;

  loading: boolean = true

  onLoad() {
    this.loading = false;
  }

  constructor() {
  }

  ngOnInit() { 
  }

}
