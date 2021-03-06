import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/filter';
import { map } from 'rxjs/operators';

@Injectable()
export class ImageService{
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = "&per_page=10";

  constructor(private _http: Http){ }

  getImage(query){
    return this._http.get(this.URL + query + this.perPage)
    .pipe(map(res => res.json()));
  }

}

  //https://pixabay.com/api/?key=9232338-5c1ff106b9384e4f9441311ef&q=yellow+flowers&image_type=photo

