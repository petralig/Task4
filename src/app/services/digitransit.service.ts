import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map'; // tämä täytyy lisätä manuaalisesti


@Injectable()
export class DigitransitService {
  private url: string = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor(private http: Http) { }

  getRoutes = (name: string) => {
    let data = `{
                  stops(name: "${name}") {
                    patterns {
                      name
                      directionId
                    }
                  }
                }`;

    let headers = new Headers({ 'Content-Type': 'application/graphql' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, data, options)
        .map(resp => resp.json() );
  }

}