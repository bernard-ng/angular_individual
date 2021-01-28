import { Injectable } from '@angular/core';
import {UserService} from './user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  constructor(private service: UserService) { }

  login(username: string, password: string): Promise<void> {
    return new Promise((resolve, rejects) => {
      if (this.service.user.username === username && this.service.user.password === password) {
        this.isLogged = true;
        resolve();
      } else {
        rejects("Les identifiants ne sont pas correctes !!!");
      }
    })
  }

  logout() {
    this.isLogged = false;
  }
}
