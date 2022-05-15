import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { RouterUrlState } from './root-router-state-serializer.service';

export interface RootState {
    router: RouterReducerState<RouterUrlState> | null;
}

export const rootReducers: ActionReducerMap<RootState> = {
    router: routerReducer,
};

export const rootInitialState: RootState = {
    router: null,
};
