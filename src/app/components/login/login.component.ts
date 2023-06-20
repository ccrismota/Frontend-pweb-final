import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin!: FormGroup;
  siteKey?: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
    ) {this.siteKey = '' }


  onSubmit(): void {
    const {email, senha} = this.formularioLogin.value;

    this.authService.login(email, senha).subscribe({
      next: (response) => {
        alert('Bem vindo!');
        this.router.navigate(['']);
      },
      error: () => {
        alert('Email ou senha inválidos!');
        this.router.navigate(['/login']);
      }
    });
}


  ngOnInit(): void {

    this.formularioLogin = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

}
