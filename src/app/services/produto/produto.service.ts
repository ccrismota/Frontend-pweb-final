import { Injectable } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


  remover(produto: Produto) {
    this.produtos.splice(this.produtos.indexOf(produto), 1);
  }


  incrementar(produto: Produto) {
    produto.qtd++;
  }

  decrementar(produto: Produto) {
    produto.qtd--;
  }

  getById(id: any): any{
    return this.produtos.find(p => p.id === id);
  }


  getProdutos(): Produto[] {
    return this.produtos;
  }

  addProduto(produto: Produto){
    this.produtos.push(produto);
  }

  constructor() { }

  produtos: Produto[] = [
    {
      id: 1,
      image: 'assets/img/marmita_1.png',
      descricao: 'Frango desfiado com risoto de abóbora, arroz integral, salada de alface americana e salpicão. Inclui sobremesa a gosto do cliente.',
      preco: 21.95,
      peso: 200,
      qtd: 50
    },
    // {
    //   id: 2,
    //   image: 'assets/img/marmita_2.png',
    //   descricao: 'Frango desfiado com risoto de abóbora, arroz integral, salada de alface americana e salpicão. Inclui sobremesa a gosto do cliente.',
    //   preco: 20.95,
    //   peso: 250,
    //   qtd: 74
    // },
    // {
    //   id: 3,
    //   image: 'assets/img/marmita_3.png',
    //   descricao: 'Frango desfiado com risoto de abóbora, arroz integral, salada de alface americana e salpicão. Inclui sobremesa a gosto do cliente.',
    //   preco: 15.87,
    //   peso: 250,
    //   qtd: 63
    // },
  ];

}
