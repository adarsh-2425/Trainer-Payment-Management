import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaypackageService {

  constructor(private http: HttpClient) { }

  getPaypackages(){
    return this.http.get('http://localhost:3000/paypackages')
  }
}
