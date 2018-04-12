import { CreateBookSlice } from '../../../book/reducers/create-book.reducer';
import { G, Plan } from '../../g-rab';
import { BookPlan } from '../models/book.plan';

export class CreateBookSlicePlan extends Plan<CreateBookSlice> {
  constructor() {
    super({
      draft: G.rab(BookPlan).model(),
      pastDrafts: []
    });
  }
}
