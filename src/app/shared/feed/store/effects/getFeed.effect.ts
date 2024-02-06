import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
    getFeedAction,
    getFeedFailureAction,
    getFeedSuccessAction,
} from '../actions/feed.action';
import { FeedService } from '../../services/feed.service';
import { GetFeedREsponseInterface } from '../../types/getFeedREsponse.interface';

@Injectable()
export class GetCurrentUserEffect {
    GetFeed$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getFeedAction),
            switchMap(({ url }) => {
                return this.feedService.getFeed(url).pipe(
                    map((feed: GetFeedREsponseInterface) => {
                        return getFeedSuccessAction({ feed });
                    }),
                    catchError(() => {
                        return of(getFeedFailureAction());
                    })
                );
            })
        )
    );

    constructor(private actions$: Actions, private feedService: FeedService) {}
}
