import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  constructor() {}
  public orders = [
    {
      name: "sandwichs",
      qte: "01",
      state: "Délivré",
      price: "200€",
      btnType: "Détails",
    },
    {
      name: "pizzas",
      qte: "04",
      state: "En cours",
      price: "120€",
      btnType: "Supprimer",
    },
  ];
  getOrders() {
    return this.orders;
  }

  setOrders(newOrder) {
    let item = {
      name: newOrder.name,
      qte: "01",
      state: "En cours",
      price: newOrder.price,
      btnType: "Supprimer",
    };
    this.orders.push(item);
  }
}
