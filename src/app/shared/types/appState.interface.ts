import { RegisterStateInterface } from '../../register/registerState.interface';
import { FeedStateInterface } from '../feed/types/feedState.interface';

export interface AppStateInterface {
    register: RegisterStateInterface;
    feed: FeedStateInterface;
}
