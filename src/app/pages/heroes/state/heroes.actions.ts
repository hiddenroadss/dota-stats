import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Hero } from '../common/hero.interface';

export const init = createAction('[Heroes] Init');

export const restore = createAction(
    '[Heroes] Restore',
    props<{ heroes: Hero[] }>()
);

export const load = createAction('[Heroes] Load');

export const loadSuccess = createAction(
    '[Heroes] Load Success',
    props<{ heroes: Hero[] }>()
);

export const loadFailure = createAction(
    '[Heroes] Load Failure',
    props<{ error: HttpErrorResponse }>()
);
