import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";


@Component({
    selector: 'mc-register',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: '/src/app/register/register.component.html'
})
export class RegisterComponent {}