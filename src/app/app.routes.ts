import { Routes } from '@angular/router';
import { NewsListComponent } from './news-list.component';
import { NewsDetailComponent } from './news-detail.component';

export const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'news/:id', component: NewsDetailComponent }
];
