import { Component, OnInit } from '@angular/core';
import Series from '../../models/series.model';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
})
export class SeriesComponent implements OnInit {

  data: Series[];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.all().subscribe(data => this.data = data);
  }

  handleDelete(id: number): void {
    const confirm = window.confirm('voulez-vous vraiment supprimer cette série ?');
    if (confirm) {
      this.service.delete(id, this.data).subscribe(data => this.data = data); 
    }  
  }
}
