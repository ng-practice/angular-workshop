import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatCardModule } from '@angular/material';

import { BookCardComponent } from './book-card/book-card.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book.routing';
import { BookDataService } from './shared/book-data.service';

@NgModule({
  imports: [
    BookRoutingModule,
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    MatCardModule
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent,
    BookCardComponent
  ],
  providers: [BookDataService]
})
export class BookModule {}
