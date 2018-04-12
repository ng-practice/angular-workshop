import { Component, ViewContainerRef } from '@angular/core';
import { HostElementProvider } from './lib/host-element/host-element.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private hostElement: ViewContainerRef,
    private hostElementProvider: HostElementProvider
  ) {
    hostElementProvider.provide(hostElement);
  }
}
