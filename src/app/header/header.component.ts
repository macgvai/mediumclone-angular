import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from '../shared/types/currentUser.interface';
import { Store, select } from '@ngrx/store';
import {
    currentUserSelector,
    isAnonymousSelector,
    isLoggedInSelector,
} from '../store/selectors';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
    selector: 'mc-header',
    standalone: true,
    imports: [RouterModule, NgIf, AsyncPipe],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    isLoggedIn$: Observable<boolean>;
    isAnonymous$: Observable<boolean>;
    currentUser$: Observable<CurrentUserInterface | null>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
        this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
        this.currentUser$ = this.store.pipe(select(currentUserSelector));

        console.log(this.isAnonymous$);
    }
}
