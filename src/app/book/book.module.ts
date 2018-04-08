import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookDataService } from './shared/book-data.service';
import { ConfirmCandeactivateGuardService } from './shared/confirm-candeactivate-guard.service';

@NgModule({
  imports: [
    BookRoutingModule,
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent
  ],
  providers: [
    BookDataService,
    ConfirmCandeactivateGuardService
  ]
})
export class BookModule { }
