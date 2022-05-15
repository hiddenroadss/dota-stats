import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { rootInitialState, rootReducers } from './root.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RootRouterStateSerializerService } from './root-router-state-serializer.service';

@NgModule({
    declarations: [],
    imports: [
        RouterModule,
        StoreModule.forRoot(rootReducers, {
            initialState: rootInitialState,
            metaReducers: [],
        }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot({
            serializer: RootRouterStateSerializerService,
        }),
    ],
})
export class RootStoreModule {}
