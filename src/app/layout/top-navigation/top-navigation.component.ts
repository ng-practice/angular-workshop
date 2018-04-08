import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html'
})
export class TopNavigationComponent {
  @Input() title: string;
}
