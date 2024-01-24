import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { RegisterService } from "../../register/services/register.service";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { PresistanceServices } from "../../shared/services/persistance.service";
import { Router } from "@angular/router";

@Injectable()
export class RegisterEffect {
    register$ = createEffect(
        () => 
            this.actions$.pipe(
                ofType(registerAction),
                switchMap(({request}) => {
                    return this.registerService.register(request).pipe(
                        map((currentUser: CurrentUserInterface) => {
                            // window.localStorage.setItem('accessToken', currentUser.token)
                            this. presistance.set('accessToken', currentUser.token)
                            return registerSuccessAction({currentUser})
                        }),
                        catchError((errorResponse: HttpErrorResponse) => {
                            // console.log('b', e)

                            return of(registerFailureAction({errors: errorResponse.error.errors }))
                        })
                    )
                })
            )
    )

    redirectAfetrSubmit$ = createEffect(
        () => 
            this.actions$.pipe(
                ofType(registerSuccessAction),
                tap(() => {
                    this.router.navigateByUrl('/')
                    console.log('tap')
                })
            )
        ,
        {dispatch: false}
    )

    constructor(
        private actions$: Actions, 
        private registerService: RegisterService,
        private presistance: PresistanceServices,
        private router: Router
    ) {}
}

