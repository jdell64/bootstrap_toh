import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// TODO: this doesn't work... either fix it or remove it
@Directive({
  selector: '[tohLoadingImg]'
})
export class LoadingImgDirective {
  imgSrc: String;

  @Input()
  spinnerSrc: String;

  constructor(private el: ElementRef) {
    this.imgSrc = el.nativeElement.src;
    el.nativeElement.src = this.spinnerSrc;
    // <img *ngIf="loading" src="/assets/ring.svg" alt="loading" />
    // <img [hidden]="loading" (load)="onLoad()" src="{{hero.imgUrl}}" alt="Hero Pic" />
  }

  @HostListener('load') onLoad() {
    this.el.nativeElement.src = this.imgSrc;
  }

}
