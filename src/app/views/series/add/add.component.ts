import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
  }
}
