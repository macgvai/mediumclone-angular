import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";


@Component({
    selector: 'mc-register',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: '/src/app/register/register.component.html'
})


export class RegisterComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this. initializeForm()
    }
    
    initializeForm(): void {
        this.form = this.fb.group({
            username: '',
            email: '',
            password: ''

        })
        
    }
    
    onSubmit(): void {
        console.log(this.form.value)
    }
}