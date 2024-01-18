import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { registerAction } from "../store/actions/register.action";
import { Observable } from "rxjs";
import { isSubmitingSelector } from "../store/selectors";
import { AppStateInterface } from "../shared/types/appState.interface";
import { AsyncPipe } from "@angular/common";
import { RegisterService } from "./services/register.service";
import { CurrentUserInterface } from "../shared/types/currentUser.interface";
import { RegisterRequestInterface } from "./registerRequest.interface";



@Component({
    selector: 'mc-register',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule, AsyncPipe],
    templateUrl: '/src/app/register/register.component.html',
    providers: [RegisterService]
})


export class RegisterComponent implements OnInit {
    form: FormGroup;
    isSubmiting$: Observable<boolean>

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
        console.log('isSubmiting', this.isSubmiting$)
    }

    onSubmit(): void {
        console.log(this.form.value)
        const request: RegisterRequestInterface = {
            user: this.form.value
        }
        this.store.dispatch(registerAction({request}))
        // this.registerService.register(this.form.value).subscribe((currentUser: CurrentUserInterface) => {console.log('currentUser', currentUser)})
    }
}