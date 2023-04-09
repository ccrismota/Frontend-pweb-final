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

    produtos: Produto[] = [
      {
        id: 1,
        image: 'assets/img/marmita_1.png',
        descricao: 'Frango desfiado com risoto de abóbora, arroz integral, salada de alface americana e salpicão. Inclui sobremesa a gosto do cliente.',
        preco: 21.95,
        peso: 200,
        qtd: 50
      },
      {
        id: 2,
        image: 'assets/img/marmita_2.png',
        descricao: 'Frango desfiado com risoto de abóbora, arroz integral, salada de alface americana e salpicão. Inclui sobremesa a gosto do cliente.',
        preco: 20.95,
        peso: 250,
        qtd: 74
      },
      {
        id: 3,
        image: 'assets/img/marmita_3.png',
        descricao: 'Frango desfiado com risoto de abóbora, arroz integral, salada de alface americana e salpicão. Inclui sobremesa a gosto do cliente.',
        preco: 15.87,
        peso: 250,
        qtd: 63
      },
    ];

    search(e: Event): void {
      const target = e.target as HTMLInputElement;
      const value = target.value;
      this.filto = this.produtos.filter((produto: Produto) => {
        return produto.descricao.toLowerCase().includes(value.toLowerCase());
      }
      );
      console.log(this.filto);
    }



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.produtoService.getById(id);

    }



  }



