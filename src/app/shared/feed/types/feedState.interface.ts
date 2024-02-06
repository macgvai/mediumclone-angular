import { GetFeedREsponseInterface } from './getFeedREsponse.interface';

export interface FeedStateInterface {
    isLoading: boolean;
    error: string;
    data: GetFeedREsponseInterface | null;
}
