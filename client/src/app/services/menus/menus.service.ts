import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MenusService {
  private apiServerUrl = "http://localhost:9191/api/menu/category=";
  constructor(private http: HttpClient) {}
  getDrinks(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}2`);
  }
  getPizzas(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}0`);
  }
  getSandwichs(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}1`);
  }
}
