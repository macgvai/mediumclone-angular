import { Injectable } from "@angular/core";
import { RegisterRequestInterface } from "../registerRequest.interface";
import { Observable, map } from "rxjs";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AuthResponseInterface } from "../authResponse.Interface";

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
    constructor(private http: HttpClient) {}
    // https://conduit.productionready.io/api/users

    // https://api.realworld.io/api/users

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users'
        console.log('data', data)
        return this.http.post<AuthResponseInterface>(url, data).pipe(map((response: AuthResponseInterface) => response.user))
    }
}