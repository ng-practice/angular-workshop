import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html'
})
export class TitleBoxComponent implements OnInit {
  @Input() title = '';

  @Output() titleClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onTitleClicked() {
    this.titleClicked.emit('EventData');
  }
}
