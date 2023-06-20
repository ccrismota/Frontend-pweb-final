import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  login(email: string, senha: string) {
    return this.http.post('http://localhost:8090/cliente/login', {email, senha}, {observe: 'response'});
  }

  salvarToken(token: string) {
    localStorage.setItem('token', token);
  }
}
