import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { HostElementProvider } from './host-element/host-element.provider';
import { LocalStorage } from './local-storage';
import { Modal } from './modal/modal';
import { ModalCleanser } from './modal/modal-cleanser';
import { ModalComponent } from './modal/modal.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule],
  declarations: [ModalComponent],
  entryComponents: [ModalComponent],
  providers: [
    LocalStorage,
    Modal,
    ModalCleanser,
    HostElementProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class LibModule {}
