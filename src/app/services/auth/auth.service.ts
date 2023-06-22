import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }


  login(email: string, senha: string) {
    return this.http.post<User>(`${this.baseUrl}/api/cliente/login`, {email, senha});
  }

  cadastrar(usuario: User) {
    return this.http.post<User>(`${this.baseUrl}/api/cliente`, usuario);
  }


}
