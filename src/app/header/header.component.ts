import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";


@Component({
    selector: 'mc-header',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: '/src/app/header/header.component.html'
})
export class Header {}