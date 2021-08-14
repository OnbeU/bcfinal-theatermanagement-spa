import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { AboutComponent } from './areas/about/pages/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './core/singleton-services/backend/backend.service';
import { DashboardComponent } from './areas/dashboard/pages/dashboard/dashboard.component';
import { HeaderComponent } from './areas/app/header/header.component';
import { MovieListComponent } from './areas/movies/pages/movie-list/movie-list.component';
import { PageNotFoundComponent } from './areas/404/pages/page-not-found/page-not-found.component';
import { ConfigService } from './core/singleton-services/config/config.service';
import { APP_INITIALIZER } from '@angular/core';

export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
};

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    MovieListComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppComponent,
    {
      // Loading ConfigService as part of APPINITIALIZER
      // ensures the application isn't started before the
      // config file is loaded.
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    },
    BackendService,
    { provide: 'BACKEND_BASE_URL', useFactory: () => environment.apiBaseUrl }
  ],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
