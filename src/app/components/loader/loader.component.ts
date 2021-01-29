import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent implements OnInit {

  constructor() { }

  @Input() loading: boolean

  ngOnInit(): void {
  }

}
