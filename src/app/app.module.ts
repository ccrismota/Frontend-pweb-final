import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AFitfoodComponent } from './components/a-fitfood/a-fitfood.component';
import { MaisVendidosComponent } from './components/mais-vendidos/mais-vendidos.component';
import { PedidosEspeciaisComponent } from './components/pedidos-especiais/pedidos-especiais.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    NavbarComponent,
    CarrinhoComponent,
    RecuperarSenhaComponent,
    LoginComponent,
    CadastroComponent,
    FooterComponent,
    LandingPageComponent,
    AFitfoodComponent,
    MaisVendidosComponent,
    PedidosEspeciaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
