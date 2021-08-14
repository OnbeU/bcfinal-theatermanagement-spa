import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public apiBaseUrl: string = `${environment.apiBaseUrl}`;
  public production: string = `${environment.production}`;

  constructor() { }

  ngOnInit(): void {
  }

}
