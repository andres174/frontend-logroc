import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = "https://logro-c-it03.wn.r.appspot.com/"

  constructor(
    private http: HttpClient
  ) { }

    getUsers(){
      return this.http.get<any>(`${this.url}users`);
    }

    getLocations(){
      return this.http.get<any>(`${this.url}locations`)
    }

}
