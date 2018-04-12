import { ErrorHandler } from '@angular/core';

import { Modal } from '../modal/modal';
import { ModalCleanser } from '../modal/modal-cleanser';

export class GlobalErrorHandler implements ErrorHandler {
  constructor(private _modal: Modal, private _cleanser: ModalCleanser) {}

  handleError(error) {
    this._modal
      .open({
        title: 'Global Error',
        message: 'Please contact the support',
        color: 'warn'
      })
      .subscribe(modal => {
        modal.changeDetectorRef.detectChanges();
        modal.instance.close.subscribe(() => this._cleanser.run());
      });
  }
}
