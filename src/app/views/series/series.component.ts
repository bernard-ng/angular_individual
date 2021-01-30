import { Component, OnInit } from '@angular/core';
import Series from '../../models/series.model';
import { DataService } from '../../services/data.service';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
})
export class SeriesComponent implements OnInit {
  data: Series[];

  constructor(private service: DataService) {}
  // calling the data
  ngOnInit(): void {
    this.service.all().subscribe((data) => (this.data = data));
  }

  // confirmation before deleting the serie
  async handleDelete(id: number) {
    const confirm = window.confirm(
      'voulez-vous vraiment supprimer cette série ?'
    );
    if (confirm) {
      this.service
        .delete(id, this.data)
        .subscribe((data) => (this.data = data));

      // usage of sweetalert library to display a success feedback
      await sweetAlert.fire({
        icon: 'success',
        title: 'Suppression réussie',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
