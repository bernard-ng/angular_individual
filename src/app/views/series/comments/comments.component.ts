import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Series from '../../../models/series.model';
import { DataService } from '../../../services/data.service';
import sweetAlert from 'sweetalert2';

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

  async handleDelete(id: number) {
    const confirm = window.confirm('Voulez-vous vraiment supprimer ce commentaire ?');
    if (confirm) {
      this.service.deleteComment(id, this.serie.comments).subscribe(c => {
        this.serie.comments = c;
      });

      // usage of sweetalert library to display a success feedback
      await sweetAlert.fire({
        icon: 'success',
        title: 'Suppression réussie',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}
