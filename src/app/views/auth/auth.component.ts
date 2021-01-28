import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  authenticationError: string;
  authenticationForm: FormGroup;

  constructor(
    private service: AuthService, 
    private formBuilder: FormBuilder, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authenticationForm = this.formBuilder.group({
      username : ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  handleSubmit() {
    this.service
      .login(this.authenticationForm.value.username, this.authenticationForm.value.password)
      .then(() => this.router.navigateByUrl('/series'))
      .catch(message => this.authenticationError = message)
  }
}
