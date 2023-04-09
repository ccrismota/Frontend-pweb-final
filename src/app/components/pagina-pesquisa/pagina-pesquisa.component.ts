import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-pagina-pesquisa',
  templateUrl: './pagina-pesquisa.component.html',
  styleUrls: ['./pagina-pesquisa.component.css']
})
export class PaginaPesquisaComponent implements OnInit {

  constructor() { }

  // @Input() produtos: Produto[] = [];

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

  }

}
