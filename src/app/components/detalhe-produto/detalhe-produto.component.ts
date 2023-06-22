import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
  ) { }

  produtoId: string = '';
  procurar: string = '';

  produtos: Produto[] = [];
  produto: Produto = {} as Produto;

  getProduto(id: string): void {
    this.produtoService.getProduto(id).subscribe((produto: Produto) => {
      this.produtos = [produto];
    });
  }




  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.produtoId = params['id'];
      this.getProduto(this.produtoId);
    });

  }

}
