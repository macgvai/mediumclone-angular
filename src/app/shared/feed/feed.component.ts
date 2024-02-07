import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedAction } from './store/actions/feed.action';
import { Observable } from 'rxjs';
import { GetFeedREsponseInterface } from './types/getFeedREsponse.interface';
import {
    errorSelector,
    feedSelector,
    isLoadingSelector,
} from './store/selectors';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'mc-feed',
    standalone: true,
    templateUrl: './feed.component.html',
    imports: [NgIf, AsyncPipe, NgFor, RouterLink],
})
export class FeedComponent implements OnInit {
    @Input('apiUrl') apiUrlProps: string;

    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    feed$: Observable<GetFeedREsponseInterface | null>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.initializeValues();
        this.fatchData();
    }

    initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.feed$ = this.store.pipe(select(feedSelector));
    }

    fatchData(): void {
        this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
    }
}
