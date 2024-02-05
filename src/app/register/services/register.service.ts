import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../registerRequest.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponseInterface } from '../authResponse.Interface';
import { LoginRequestInterface } from '../../login/loginRequest.interface';

@Injectable({
    providedIn: 'root',
})
export class RegisterService {
    constructor(private http: HttpClient) {}
    // https://conduit.productionready.io/api/users

    // https://api.realworld.io/api/users

    getUser(response: AuthResponseInterface): CurrentUserInterface {
        return response.user;
    }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users';
        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map(this.getUser));
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users/login';
        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map(this.getUser));
    }

    getCurrentUser(): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/user';
        return this.http.get(url).pipe(map(this.getUser));
    }
}
