import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styles: [
    '.title { color: #FFFFFF; text-decoration: none; }',
    '.logo { padding-right: 16px; }'
  ]
})
export class TopNavigationComponent {
  @Input() title: string;
}
