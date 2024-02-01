import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { RegisterService } from '../../register/services/register.service';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PresistanceServices } from '../../shared/services/persistance.service';
import { Router } from '@angular/router';
import {
    loginAction,
    loginFailureAction,
    loginSuccessAction,
} from '../actions/login.action';

@Injectable()
export class LoginEffect {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            switchMap(({ request }) => {
                return this.registerService.login(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        // window.localStorage.setItem('accessToken', currentUser.token)
                        this.presistance.set('accessToken', currentUser.token);
                        return loginSuccessAction({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        // console.log('b', e)

                        return of(
                            loginFailureAction({
                                errors: errorResponse.error.errors,
                            })
                        );
                    })
                );
            })
        )
    );

    redirectAfetrSubmit$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loginSuccessAction),
                tap(() => {
                    this.router.navigateByUrl('/');
                    console.log('tap');
                })
            ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private registerService: RegisterService,
        private presistance: PresistanceServices,
        private router: Router
    ) {}
}
