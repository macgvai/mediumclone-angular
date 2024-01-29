import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { registerAction } from "../store/actions/register.action";
import { Observable } from "rxjs";
import { isSubmitingSelector, validationErrorsSelector } from "../store/selectors";
import { AppStateInterface } from "../shared/types/appState.interface";
import { AsyncPipe, NgIf } from "@angular/common";
import { BackendErrorsInterface } from "../shared/types/backenErrors.interface";
import { BackendErrorMassagesComponent } from "../backendErrorMassages/backendErrorMassages.component";
import { LoginRequestInterface } from "./loginRequest.interface";
import { loginAction } from "../store/actions/login.action";



@Component({
    selector: 'mc-login',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule, AsyncPipe, BackendErrorMassagesComponent, NgIf],
    templateUrl: '/src/app/login/login.component.html',
    providers: []
})


export class LoginComponent implements OnInit {
    form: FormGroup;
    isSubmiting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;

    constructor(private fb: FormBuilder, private store: Store<AppStateInterface> ) {}

    ngOnInit(): void {
        this. initializeForm()
        this.initializeValues()
    }
    
    initializeForm(): void {
        this.form = this.fb.group({
            email: '',
            password: ''
        })
    }
    
    initializeValues(): void {
        this.isSubmiting$ = this.store.pipe(select(isSubmitingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }

    onSubmit(): void {
        const request: LoginRequestInterface = {
            user: this.form.value
        }
        this.store.dispatch(loginAction({request}))
        // this.registerService.register(this.form.value).subscribe((currentUser: CurrentUserInterface) => {console.log('currentUser', currentUser)})
    }
}