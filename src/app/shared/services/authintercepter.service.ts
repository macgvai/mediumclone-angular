import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PresistanceServices } from './persistance.service';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(private persistanceService: PresistanceServices) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = this.persistanceService.get('accessToken');
        req.clone({
            setHeaders: {
                Authorization: token ? `Token ${token}` : '',
            },
        });
        return next.handle(req);
    }
}
