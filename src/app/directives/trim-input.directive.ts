import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrimInput]',
  standalone: false
})
export class TrimInputDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('input')

  onInput() {
    const inputElement = this.elementRef.nativeElement;
    inputElement.value = inputElement.value.trim();
  }

}
