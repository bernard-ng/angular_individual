import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Series from '../../models/series.model';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit, OnDestroy {

  data: Series[];
  private subscrption = new Subscription();

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.subscrption.add(
      this.service.getSeries().subscribe(data => this.data = data)
    );
  }

  ngOnDestroy() {
    this.subscrption.unsubscribe();
  }
}
