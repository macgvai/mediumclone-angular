import {
    ApplicationConfig,
    importProvidersFrom,
    isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { provideEffects } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import {
    HTTP_INTERCEPTORS,
    HttpClientModule,
    provideHttpClient,
    withInterceptors,
} from '@angular/common/http';
import { LoginEffect } from './store/effects/login.effect';
import { GetCurrentUserEffect } from './store/effects/getCurrentUeser.effect';
import { PresistanceServices } from './shared/services/persistance.service';
import { AuthInterceptor } from './shared/services/authintercepter.service';
import { feedReducers } from './shared/feed/store/reducers';
import { GetFeedEffect } from './shared/feed/store/effects/getFeed.effect';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideStore(),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
        provideState({ name: 'register', reducer: reducers }),
        provideState({ name: 'feed', reducer: feedReducers }),
        provideEffects([
            RegisterEffect,
            LoginEffect,
            GetCurrentUserEffect,
            GetFeedEffect,
        ]),
        provideHttpClient(),
        PresistanceServices,
        importProvidersFrom(HttpClientModule),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
};
