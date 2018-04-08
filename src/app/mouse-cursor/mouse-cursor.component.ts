import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html'
})
export class MouseCursorComponent {

  x = 0;
  y = 0;

  onMousemove($event: MouseEvent) {

    this.x = $event.clientX;
    this.y = $event.clientY;
  }
}
