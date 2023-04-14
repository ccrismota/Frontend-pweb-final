import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin!: FormGroup;

  constructor(private fb: FormBuilder) { }


  onSubmit(): void {
    console.log(this.formularioLogin.value);
    alert('Bem vindo!');
  }


  ngOnInit(): void {

    this.formularioLogin = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

}
