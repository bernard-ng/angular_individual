import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-view',
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.scss'],
})
export class AddViewComponent implements OnInit {
  addSerieForm: FormGroup;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addSerieForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      season_released_at: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(256)]],
      review: ['', [Validators.required, Validators.maxLength(256)]],
      photo: ['', Validators.required],
    });
  }

  onSubmitNewDeal(): void {
    const newSerie = new Data(
      this.addForm.value.title,
      this.addForm.value.author,
      this.newDealForm.value.desc,
      this.newDealForm.value.price
    );

    this.dataService.addSerie(addSerie);

    this.router.navigate(['series']);
  }
}
