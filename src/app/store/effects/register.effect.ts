import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { catchError, map, of, switchMap } from "rxjs";
import { RegisterService } from "../../register/services/register.service";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => 
        this.actions$.pipe(
            ofType(registerAction),
            switchMap(({request}) => {
                return this.registerService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        console.log('a')
                        return registerSuccessAction({currentUser})
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        // console.log('b', e)

                        return of(registerFailureAction({errors: errorResponse.error.errors }))
                    })
                )
            })
        ))

    constructor(
        private actions$: Actions, 
        private registerService: RegisterService
    ) {}
}

