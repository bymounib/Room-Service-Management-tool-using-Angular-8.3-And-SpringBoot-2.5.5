import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MenusService {
  token:string;
  private apiServerUrl = "http://localhost:9191/api/menu/category=";
  constructor(private http: HttpClient) {}
  getToken() {
    this.token= localStorage.getItem('jwt');
  }
  getDrinks(): Observable<any> {
    this.getToken();
    const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.token}`
  })
    return this.http.get<any>(`${this.apiServerUrl}2`, { headers: headers });
  }
  getPizzas(): Observable<any> {
    this.getToken();
    const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.token}`
  })
    return this.http.get<any>(`${this.apiServerUrl}0`, { headers: headers });
  }
  getSandwichs(): Observable<any> {
    this.getToken();
    const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.token}`
  })
    return this.http.get<any>(`${this.apiServerUrl}1`, { headers: headers });
  }
}
