import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})

export class AppToggleDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    const iBool: boolean = this.el.nativeElement.children[1].checked;

    if (this.el.nativeElement.classList.contains('activo')) {
        this.el.nativeElement.classList.remove('activo');
        this.el.nativeElement.children[1].checked = false;
    } else {
        this.el.nativeElement.classList.add('activo');
        this.el.nativeElement.children[1].checked = true;
    }
  }
}
