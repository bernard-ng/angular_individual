import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <h1>404</h1>
    <h3>Page Not Found</h3>
  `
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
