import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


  constructor(
    private http: HttpClient
  ) { }


  private baseUrl = 'http://localhost:8090';


  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/api/produtos`);
  }

  procurarProdutos(procurar: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/api/produtos?descricao_like=${procurar}`);

  }

  getProduto(id: string) {
    return this.http.get<Produto>(`${this.baseUrl}/api/produto/${id}`);
  }
}


