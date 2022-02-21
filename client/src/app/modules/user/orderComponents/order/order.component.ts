import { Component, OnInit } from "@angular/core";
import { OrdersService } from "src/app/services/orders/orders.service";
import { Observable, interval, Subscription } from "rxjs";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent implements OnInit {
  orders;
  sum = 0;
  private updateSubscription: Subscription;

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

    this.updateSubscription = interval(1000).subscribe(() => {
      this.ordersList.getOrders().subscribe((data) => {
        this.orders = data;
      });
    });
  }
  deleteOrder(order) {
    console.log("order", order);
    this.ordersList.deleteOrder(order);
  }
}
