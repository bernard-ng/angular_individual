import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
  form: FormGroup;

  constructor(
    private service: DataService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  // empty form before fill the information of a new serie
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      season_released_at: ['', Validators.required],
      season_count: ['', [Validators.required]],
      description: ['', Validators.required],
      review: ['', Validators.required],
      photo: [''],
    });
  }
  // submit the form after fill the informations of a new serie
  async handleSubmit() {
    const data = {
      id: this.service.increment(),
      name: this.form.value.name,
      season_released_at: this.form.value.season_released_at,
      season_count: this.form.value.season_count,
      description: this.form.value.description,
      review: this.form.value.review,
      photo: this.form.value.photo,
      comments: [],
    };

    this.service.create(data);

    // usage of sweetalert library to display a success feedback
    await sweetAlert.fire({
      icon: 'success',
      title: 'Série ajoutée',
      showConfirmButton: false,
      timer: 1500,
    });
    await this.router.navigateByUrl('/series');
  }
}
