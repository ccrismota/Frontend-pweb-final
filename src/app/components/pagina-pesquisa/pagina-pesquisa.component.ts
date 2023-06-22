import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-pagina-pesquisa',
  templateUrl: './pagina-pesquisa.component.html',
  styleUrls: ['./pagina-pesquisa.component.css']
})
export class PaginaPesquisaComponent implements OnInit {

  @Input() procurarProduto!: String;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService

  ) { }

  procurar: string = '';
  filto: Produto[] = [];
  produtos: Produto[] = [];

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


  ngOnInit(): void {
    this.carregarProdutos();

  }
}
