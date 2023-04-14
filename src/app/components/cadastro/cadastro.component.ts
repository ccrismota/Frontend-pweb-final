import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  formularioCadastro!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }


  onSubmit(): void {
    console.log(this.formularioCadastro.value);
    alert('Cadastro realizado com sucesso!');
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
