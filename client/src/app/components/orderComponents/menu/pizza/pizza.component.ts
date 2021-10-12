import { Component, OnInit } from "@angular/core";
import { MenusService } from "src/app/services/menus/menus.service";
import { OrdersService } from "src/app/services/orders/orders.service";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas;
  qte: number[] = [1];

  constructor(
    private MenusList: MenusService,
    private ordersList: OrdersService
  ) {}

  ngOnInit() {
    this.MenusList.getPizzas().subscribe((data) => {
      this.pizzas = data;
      for (let i = 0; i < data.length; i++) {
        this.qte.push(1);
      }
    });
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  // pizzas = [
  //   {
  //     name: "Pizza Margherita",
  //     components: "Mozzarella et sauce tomate aux herbes.",
  //     price: "10$",
  //     addedToCard: false,
  //   },
  //   {
  //     name: "Pizza Thon",
  //     components:
  //       "Thon, poivrons verts, oignons, tomate fraîche, mozzarella et sauce tomate aux herbes",
  //     price: "12$",
  //     addedToCard: false,
  //   },
  //   {
  //     name: "Pizza Végétarienne",
  //     components:
  //       "Champignons, poivrons verts, oignons, tomates fraîches, olives noires, mozzarella et sauce tomate aux herbes.",
  //     price: "17$",
  //     addedToCard: false,
  //   },
  // ];

  addToCard(pizza, index) {
    pizza.addedToCard = !pizza.addedToCard;
    console.log("pizza", pizza);
    pizza["qte"] = this.qte[index];
    this.ordersList.setOrders(pizza);
  }
}
