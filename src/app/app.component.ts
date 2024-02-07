import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Store, props } from '@ngrx/store';
import { getCurrentUserAction } from './store/actions/getCurrentUser.action';
import { GlobalFeedComponent } from './globalFeed/globalFeed.component';
import { getFeedAction } from './shared/feed/store/actions/feed.action';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        GlobalFeedComponent,
    ],
    templateUrl: '/src/app/app.component.html',
})
export class AppComponent implements OnInit {
    constructor(private store: Store) {}
    ngOnInit(): void {
        this.store.dispatch(getCurrentUserAction());
    }
}
