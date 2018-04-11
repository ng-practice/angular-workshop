import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { BookCardComponent } from './components/book-card/book-card.component';
import { BookDetailComponent } from './containers/book-detail/book-detail.component';
import { BookEditComponent } from './containers/book-edit/book-edit.component';
import { BookListComponent } from './containers/book-list/book-list.component';
import { BookNewComponent } from './containers/book-new/book-new.component';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book.routing';
import { BookDataService } from './shared/book-data.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  imports: [
    BookRoutingModule,
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,

    StoreModule.forFeature('bookShelf', reducers)
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
