import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Series from '../../../models/series.model';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {

  serie: Series;
  private params: Params

  constructor(private service: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe(p => this.params = p);
  }

  ngOnInit(): void {
    this.service
      .read(this.params.id)
      .subscribe(data => this.serie = data);
  }
}
