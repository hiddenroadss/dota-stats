import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ENVIRONMENT } from './services/environment.service';
import { environment } from 'src/environments/environment';
import { RootStoreModule } from './root-store/root-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LayoutModule } from './layout/layout.module';

@NgModule({
    declarations: [],
    imports: [HttpClientModule, LayoutModule, RootStoreModule, !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production}) : []],
    providers: [
        {
            provide: ENVIRONMENT,
            useValue: environment,
        },
    ],
})
export class CoreModule {}
