import { ConfigService } from './../../../../core/singleton-services/config/config.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public apiBaseUrl!: string;
  public production: string = `${environment.production}`;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.apiBaseUrl = this.configService.apiBaseUrl;
  }
}
