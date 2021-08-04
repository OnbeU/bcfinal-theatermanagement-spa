import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './areas/movies/pages/movie-list/movie-list.component';
import { DashboardComponent } from './areas/dashboard/pages/dashboard/dashboard.component';
import { HeaderComponent } from './areas/app/header/header.component';
import { PageNotFoundComponent } from './areas/404/pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    DashboardComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppComponent
  ],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
