import { Component, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {


  quantidade: number = 1;

  constructor(
    private produtoService: ProdutoService,
    ) { }

    produto: Produto[] = this.produtoService.getProdutos();


    incrementar(produto: Produto): void {
      this.quantidade++;
      this.produtoService.incrementar(produto);
    }




    decrementar(produto: Produto): void {
      if (this.quantidade > 1)
      this.quantidade--;
      this.produtoService.decrementar(produto);
    }


    remover(produto: Produto): void {
      this.produtoService.remover(produto);
    }

    somarProdutos(): number {
      let soma = 0.00;
      this.produto.forEach(produto => {
        soma += produto.preco * this.quantidade;
      });
      return Number(soma.toFixed(2));
    }



  ngOnInit(): void {


  }

}
