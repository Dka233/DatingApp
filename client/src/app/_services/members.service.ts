import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

// I keep this code just to know another form of using httpheaders, but we are using an interceptor called "jwt"
// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
}
