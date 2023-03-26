import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AFitfoodComponent } from './components/a-fitfood/a-fitfood.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { MaisVendidosComponent } from './components/mais-vendidos/mais-vendidos.component';

import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PedidosEspeciaisComponent } from './components/pedidos-especiais/pedidos-especiais.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent ,

  children: [
    {path: '', component: LandingPageComponent},
    {path: 'fitfood', component: AFitfoodComponent},
    {path: 'mais-vemdidos', component: MaisVendidosComponent},
    {path: 'pedidos-especiais', component: PedidosEspeciaisComponent},
    {path: 'login', component: LoginComponent},
    {path: 'carrinho', component: CarrinhoComponent},
]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
