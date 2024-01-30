import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { RegisterService } from '../../register/services/register.service';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PresistanceServices } from '../../shared/services/persistance.service';
import {
    getCurrentUserAction,
    getCurrentUserFailureAction,
    getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.action';

@Injectable()
export class GetCurrentUserEffect {
    GetCurrentUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getCurrentUserAction),
            switchMap(() => {
                const token = this.presistance.get('accessToken');
                if (!token) {
                    return of(getCurrentUserFailureAction());
                }
                return this.registerService.getCurrentUser().pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return getCurrentUserSuccessAction({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(getCurrentUserFailureAction());
                    })
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private registerService: RegisterService,
        private presistance: PresistanceServices
    ) {}
}
