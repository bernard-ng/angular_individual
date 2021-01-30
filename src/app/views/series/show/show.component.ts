import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Series from '../../../models/series.model';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit {
  serie: Series;
  private params: Params;

  constructor(private service: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe((p) => (this.params = p));
  }
  // show the details series by id
  ngOnInit(): void {
    this.service.read(this.params.id).subscribe((data) => (this.serie = data));
  }
}
