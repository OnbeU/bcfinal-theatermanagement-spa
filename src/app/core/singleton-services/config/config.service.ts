import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Config } from "./config";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiBaseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiBaseUrl = '(not yet loaded)';
  }

  loadConfig() {
    return this.httpClient
      .get<Config>('./assets/config.json')
      .toPromise()
      .then(config => {
        this.apiBaseUrl = config.apiBaseUrl!;
      });
  }
}
