import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {

  formularioRecSenha!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }


  onSubmit(): void {
    console.log(this.formularioRecSenha.value);
    alert('Acesse o link em seu email para redefinir a nova senha!');
    this.formularioRecSenha.reset();
  }



  ngOnInit(): void {
    this.formularioRecSenha = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
    });
  }



}
