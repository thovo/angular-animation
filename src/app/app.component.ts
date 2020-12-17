import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-animation';
  animationSpeed: number = 1000;
  @ViewChild('box') box: ElementRef;

  handleMouseClick(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    this.box.nativeElement.style.left = x - 30 + 'px';
    this.box.nativeElement.style.top = y - 30 + 'px';
  }
}
