import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private http: HttpClient) { }

public loginUser(loginPayload: any): Observable<any> {
  return this.http.post(`${environment.api_url}/login`, loginPayload);
}

public registerUser(userPayload: any): Observable<any> {
  return this.http.post(`${environment.api_url}/createuser`, userPayload);
}
}
