import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  template: '<h2>Detalle de Noticia {{ newsId }}</h2>'
})
export class NewsDetailComponent {
  newsId: string | null = '';

  constructor(private route: ActivatedRoute) {
    this.newsId = this.route.snapshot.paramMap.get('id');
  }
}
