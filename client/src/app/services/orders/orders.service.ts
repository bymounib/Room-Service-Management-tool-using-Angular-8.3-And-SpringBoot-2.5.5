import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  private apiServerUrl = "http://localhost:9191/api";
  constructor(private http: HttpClient) {}
  getOrders(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/order`);
  }
  orders = this.getOrders();
  // constructor() {}
  // public orders = [
  //   {
  //     name: "sandwichs",
  //     qte: "01",
  //     state: "Délivré",
  //     price: "200€",
  //     btnType: "Détails",
  //   },
  //   {
  //     name: "pizzas",
  //     qte: "04",
  //     state: "En cours",
  //     price: "120€",
  //     btnType: "Supprimer",
  //   },
  // ];
  // getOrders() {
  //   return this.orders;
  // }

  // setOrders(newOrder) {
  //   let item = {
  //     name: newOrder.name,
  //     qte: "01",
  //     state: "En cours",
  //     price: newOrder.price,
  //     btnType: "Supprimer",
  //   };
  //   this.orders.push(item);
  // }
}
