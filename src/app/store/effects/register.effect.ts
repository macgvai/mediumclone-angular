import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { catchError, map, of, switchMap } from "rxjs";
import { RegisterService } from "../../register/services/register.service";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";

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
                    catchError((e) => {
                        console.log('b', e)

                        return of(registerSuccessAction)
                    })
                )
            })
        ))

    constructor(
        private actions$: Actions, 
        private registerService: RegisterService
    ) {}
}

