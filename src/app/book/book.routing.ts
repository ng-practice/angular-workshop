import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailComponent } from './containers/book-detail/book-detail.component';
import { BookEditComponent } from './containers/book-edit/book-edit.component';
import { BookListComponent } from './containers/book-list/book-list.component';
import { BookNewComponent } from './containers/book-new/book-new.component';
import { BookComponent } from './book.component';

export const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: '',
        component: BookListComponent
      },
      {
        path: 'new',
        component: BookNewComponent
      },
      {
        path: ':isbn',
        component: BookDetailComponent,
      },
      {
        path: ':isbn/edit',
        component: BookEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
