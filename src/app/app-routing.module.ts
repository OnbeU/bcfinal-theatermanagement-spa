import { MovieListComponent } from './areas/movies/pages/movie-list/movie-list.component';
import { DashboardComponent } from './areas/dashboard/pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './areas/404/pages/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , component: DashboardComponent  },
  {path: 'movies' , component: MovieListComponent },
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
