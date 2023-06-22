import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {



  @Input() produto!: Produto;


  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
  ) { }

  filto: Produto[] = [];
  procurar: string = '';

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



