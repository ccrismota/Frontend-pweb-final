import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  carrinho: Produto[] = [];


  @Input('totalQuantityCart') produto!: 0;
  @Output('addToCart') addToCart = new EventEmitter<Produto>();


    constructor() { }


    produtosNoCarrinho(produto: Produto){
      return this.carrinho.includes(produto);
    }



  ngOnInit(): void {

  }

}
