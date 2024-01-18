import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { provideEffects } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore(), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), 
    provideState({ name: 'register', reducer: reducers }),
    provideEffects([RegisterEffect]),
    provideHttpClient()
  ]
};
