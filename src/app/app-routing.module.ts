import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list.component';
import { NewsDetailComponent } from './news-detail.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'news/:id', component: NewsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
