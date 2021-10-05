import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../services/orders/orders.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent implements OnInit {
  public orders = [];
  constructor(private ordersList: OrdersService) {}
  ngOnInit() {
    this.orders = this.ordersList.getOrders();
  }
}
