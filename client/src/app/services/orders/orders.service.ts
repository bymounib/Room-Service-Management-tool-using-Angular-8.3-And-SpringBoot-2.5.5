import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

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
  setOrders(newOrder) {
    let item = {
      date: "2021-10-11",
      menus: {
        id: newOrder.id,
        name: newOrder.name,
        category: newOrder.category,
        components: newOrder.components,
        price: newOrder.price,
        created_at: newOrder.created_at,
        updated_at: null,
      },
      qte: newOrder.qte,
      state: "en cours",
      created_at: newOrder.created_at,
      updated_at: null,
    };
    //   this.orders.push(item);

    return this.http
      .post<any>(`${this.apiServerUrl}/order`, item)
      .subscribe((data) => {
        this.orders = data;
        // this.orders.push(item);
      });
  }
  deleteOrder(order) {
    let item = {
      id: order.id,
      date: "2021-10-11",
      menus: {
        id: order.menus.id,
        name: order.menus.name,
        category: order.menus.category,
        components: order.menus.components,
        price: order.menus.price,
        created_at: order.menus.created_at,
        updated_at: null,
      },
      qte: order.qte,
      state: "en cours",
      deleted: 1,
      created_at: order.created_at,
      updated_at: null,
    };
    //   this.orders.push(item);

    return this.http
      .put<any>(`${this.apiServerUrl}/order`, item)
      .subscribe((data) => {
        this.orders = data;
      });
  }
}
