import { Component } from '@angular/core';
import { FeedComponent } from '../shared/feed/feed.component';

@Component({
    selector: 'mc-globalFeed',
    standalone: true,
    templateUrl: './globalFeed.component.html',
    imports: [FeedComponent],
})
export class GlobalFeedComponent {
    apiUrl = '/articles';
}
