import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateUserPayload, IUser } from "./models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";

@Injectable({
    providedIn : "root"
})

export class UsersService {
    constructor(private httpClient : HttpClient){}

    getUsers(): Observable<IUser[]>{
        return this.httpClient.get<IUser[]>(environment.baseAPIURL + "/users")
    }
    getUserById(id : number): Observable<IUser | undefined>{
        return this.httpClient.get<IUser>(environment.baseAPIURL + "/users/" + id);
    }
    deleteUsersById(id : number): Observable<IUser | undefined>{
        console.log(this.httpClient.get<IUser>(environment.baseAPIURL + "/users/" + id));
        return this.httpClient.delete<IUser>(environment.baseAPIURL + "/users/" + id);
    }
    updateUsersById(id : number, payload: CreateUserPayload): Observable<IUser | undefined>{
        return this.httpClient.put<IUser>(
            `${environment.baseAPIURL}/users/${id}`,
            payload
        );
    }
    createUser(payload: CreateUserPayload): Observable<IUser> {
        return this.httpClient.post<IUser>(
          `${environment.baseAPIURL}/users`,
          payload
        );
    }

}