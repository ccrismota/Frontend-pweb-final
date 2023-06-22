import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  formularioCadastro!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  onSubmit(): void {
    this.authService.cadastrar(this.formularioCadastro.value).subscribe(
      (data) => {
        console.log(data);
        alert('Cadastro realizado com sucesso!');
      },
      (error) => {
        console.log(error);
        alert('Erro ao cadastrar!');
      }
    );
  }

  ngOnInit(): void {

    this.formularioCadastro = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(10)]],
      email: ['',[Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
    });

  }

}
