import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

// TODO: Alphabetize these
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './core/singleton-services/backend/backend.service';
import { MovieListComponent } from './areas/movies/pages/movie-list/movie-list.component';
import { DashboardComponent } from './areas/dashboard/pages/dashboard/dashboard.component';
import { HeaderComponent } from './areas/app/header/header.component';
import { PageNotFoundComponent } from './areas/404/pages/page-not-found/page-not-found.component';
import { AboutComponent } from './areas/about/pages/about/about.component';

@NgModule({
  declarations: [
    // TODO: Alphabetize these
    AppComponent,
    MovieListComponent,
    DashboardComponent,
    HeaderComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppComponent,
    BackendService,
    { provide: 'BACKEND_BASE_URL', useFactory: () => environment.apiBaseUrl }
  ],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
