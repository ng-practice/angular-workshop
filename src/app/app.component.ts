import { ChangeDetectorRef, Component, ViewContainerRef } from '@angular/core';

import { HostElementProvider } from './lib/host-element/host-element.provider';
import { ModalCleanser } from './lib/modal/modal-cleanser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private hostElement: ViewContainerRef,
    private changeDetector: ChangeDetectorRef,
    private hostElementProvider: HostElementProvider,
    private modalCleanser: ModalCleanser
  ) {
    hostElementProvider.provide(hostElement);
    modalCleanser
      .cleanUpRequests()
      .subscribe(() => changeDetector.detectChanges());

    // throw new Error();
  }
}
