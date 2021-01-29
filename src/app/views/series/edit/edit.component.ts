import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Series from '../../../models/series.model';
import { DataService } from '../../../services/data.service';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {

    serie: Series;
    form: FormGroup;
    private params: Params

    constructor(
        private service: DataService, 
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: Router
    ) { 
        this.route.params.subscribe(p => this.params = p);
    }

  ngOnInit(): void {
    this.service.read(this.params.id).subscribe(data => {

      this.serie = data;
      this.form = this.formBuilder.group({
        name: [this.serie.name, Validators.required],
        season_released_at: [this.serie.season_released_at, Validators.required],
        season_count: [this.serie.season_count, [Validators.required]],
        description: [this.serie.description, Validators.required],
        review: [this.serie.review, Validators.required],
        photo: [this.serie.photo]
      });
    });
  }

  async handleSubmit() {
    const updatedData = {
        id: this.serie.id,
        name: this.form.value.name,
        season_released_at: this.form.value.season_released_at,
        season_count: this.form.value.season_count,
        description: this.form.value.description,
        review: this.form.value.review,
        photo: this.form.value.photo,
        comments: this.serie.comments
    };

    this.service.update(this.serie.id, updatedData);

    // usage of sweetalert library to display a success feedback
    await sweetAlert.fire({
        icon: 'success',
        title: 'Mise à jour réussi',
        showConfirmButton: false,
        timer: 1500
    })
    await this.router.navigateByUrl('/series');
  }
}
