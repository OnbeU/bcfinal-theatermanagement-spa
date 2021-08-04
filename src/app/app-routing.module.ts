import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './areas/about/pages/about/about.component';
import { DashboardComponent } from './areas/dashboard/pages/dashboard/dashboard.component';
import { MovieListComponent } from './areas/movies/pages/movie-list/movie-list.component';
import { PageNotFoundComponent } from './areas/404/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '' , component: DashboardComponent  },
  {path: 'about', component: AboutComponent },
  {path: 'movies', component: MovieListComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
