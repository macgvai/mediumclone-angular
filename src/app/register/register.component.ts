import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { registerAction } from "../store/actions/register.action";
import { Observable } from "rxjs";
import { isSubmitingSelector, validationErrorsSelector } from "../store/selectors";
import { AppStateInterface } from "../shared/types/appState.interface";
import { AsyncPipe, NgIf } from "@angular/common";
import { RegisterService } from "./services/register.service";
import { RegisterRequestInterface } from "./registerRequest.interface";
import { BackendErrorsInterface } from "../shared/types/backenErrors.interface";
import { BackendErrorMassagesComponent } from "../backendErrorMassages/backendErrorMassages.component";



@Component({
    selector: 'mc-register',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule, AsyncPipe, BackendErrorMassagesComponent, NgIf],
    templateUrl: '/src/app/register/register.component.html',
    providers: [RegisterService]
})


export class RegisterComponent implements OnInit {
    form: FormGroup;
    isSubmiting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;

    constructor(private fb: FormBuilder, private store: Store<AppStateInterface>, private registerService: RegisterService ) {}

    ngOnInit(): void {
        this. initializeForm()
        this.initializeValues()
    }
    
    initializeForm(): void {
        this.form = this.fb.group({
            username: '',
            email: '',
            password: ''
        })
    }
    
    initializeValues(): void {
        this.isSubmiting$ = this.store.pipe(select(isSubmitingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }

    onSubmit(): void {
        const request: RegisterRequestInterface = {
            user: this.form.value
        }
        this.store.dispatch(registerAction({request}))
        // this.registerService.register(this.form.value).subscribe((currentUser: CurrentUserInterface) => {console.log('currentUser', currentUser)})
    }
}