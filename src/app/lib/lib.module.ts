import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { HostElementProvider } from './host-element/host-element.provider';
import { LocalStorage } from './local-storage';
import { Modal } from './modal/modal';
import { ModalCleanser } from './modal/modal-cleanser';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule
  ],
  declarations: [ModalComponent],
  entryComponents: [ModalComponent],
  providers: [LocalStorage, Modal, ModalCleanser, HostElementProvider]
})
export class LibModule { }
