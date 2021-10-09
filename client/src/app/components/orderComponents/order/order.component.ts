import { Component, OnInit } from "@angular/core";
import { OrdersService } from "src/app/services/orders/orders.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent implements OnInit {
  orders;
  constructor(private ordersList: OrdersService) {}
  ngOnInit() {
    this.ordersList.getOrders().subscribe((data) => {
      console.log(data);
      this.orders = data;
    });
  }
}
