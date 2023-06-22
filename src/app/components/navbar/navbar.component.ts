import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  produtos: Produto[] = [];

  filto: Produto[] = [];
  procurar: string = '';
  fil: string = '';


  @Input('totalQuantityCart') produto!: 0;
  @Output('addToCart') addToCart = new EventEmitter<Produto>();

    constructor(private produtoService: ProdutoService) { }

    carregarProdutos(): void {
      this.produtoService.getProdutos().subscribe((produtos: Produto[]) => {
        this.produtos = produtos;
        this.filto = produtos;
      });
    }

    procurarProdutos(): void {
      if (this.procurar && this.procurar.trim() !== '') {
        this.produtoService.procurarProdutos(this.procurar).subscribe((produtos: Produto[]) => {
          this.produtos = produtos;
        });
      } else {
        this.carregarProdutos();
      }
    }

   // produtosNoCarrinho(produto: Produto){
    //   return this.carrinho.includes(produto);
    // }



  ngOnInit(): void {
    this.carregarProdutos();
  }

}
