import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './areas/movies/pages/movie-list/movie-list.component';
import { DashboardComponent } from './areas/dashboard/pages/dashboard/dashboard.component';
import { HeaderComponent } from './areas/app/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
