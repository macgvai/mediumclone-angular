import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedREsponseInterface } from '../types/getFeedREsponse.interface';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FeedService {
    constructor(private http: HttpClient) {}

    getFeed(url: string): Observable<GetFeedREsponseInterface> {
        const fullUrl = environment.apiUrl + url;
        return this.http.get<GetFeedREsponseInterface>(fullUrl);
    }
}
