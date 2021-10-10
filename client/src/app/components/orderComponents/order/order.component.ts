import { Component, OnInit } from "@angular/core";
import { OrdersService } from "src/app/services/orders/orders.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent implements OnInit {
  orders;
  sum = 0;
  constructor(private ordersList: OrdersService) {}
  ngOnInit() {
    this.ordersList.getOrders().subscribe((data) => {
      console.log(data);
      this.orders = data;
      for (let i = 0; i < this.orders.length; i++) {
        let order = this.orders[i];
        this.sum += parseInt(order.menus.price);
      }
    });
  }
}
