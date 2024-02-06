import { Action, createReducer, on } from '@ngrx/store';
import { FeedStateInterface } from '../types/feedState.interface';
import {
    getFeedAction,
    getFeedFailureAction,
    getFeedSuccessAction,
} from './actions/feed.action';

const initialState: FeedStateInterface = {
    isLoading: false,
    error: '',
    data: null,
};

const feedReducer = createReducer(
    initialState,
    on(
        getFeedAction,
        (state): FeedStateInterface => ({
            ...state,
            isLoading: true,
        })
    ),
    on(
        getFeedSuccessAction,
        (state, action): FeedStateInterface => ({
            ...state,
            isLoading: false,
            data: action,
        })
    ),
    on(
        getFeedFailureAction,
        (state): FeedStateInterface => ({
            ...state,
            isLoading: false,
        })
    )
);

export function feedReducers(state: FeedStateInterface, action: Action) {
    return feedReducer(state, action);
}
