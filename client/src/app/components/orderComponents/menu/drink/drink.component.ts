import { Component, OnInit } from "@angular/core";
import { MenusService } from "src/app/services/menus/menus.service";
import { OrdersService } from "src/app/services/orders/orders.service";

@Component({
  selector: "app-drink",
  templateUrl: "./drink.component.html",
  styleUrls: ["./drink.component.css"],
})
export class DrinkComponent implements OnInit {
  drinks;
  qte: number[] = [1];

  constructor(
    private MenusList: MenusService,
    private ordersList: OrdersService
  ) {}

  ngOnInit() {
    this.MenusList.getDrinks().subscribe((data) => {
      this.drinks = data;
      for (let i = 0; i < data.length; i++) {
        this.qte.push(1);
      }
    });
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  // drinks = [
  //   {
  //     name: "Coca-Cola",
  //     price: "10$",
  //     addedToCard: false,
  //   },
  //   {
  //     name: "Fanta",
  //     price: "12$",
  //     addedToCard: false,
  //   },
  //   {
  //     name: "Boga",
  //     price: "17$",
  //     addedToCard: false,
  //   },
  // ];
  addToCard(drink, index) {
    drink.addedToCard = !drink.addedToCard;
    drink["qte"] = this.qte[index];
    this.ordersList.setOrders(drink);
  }
}
