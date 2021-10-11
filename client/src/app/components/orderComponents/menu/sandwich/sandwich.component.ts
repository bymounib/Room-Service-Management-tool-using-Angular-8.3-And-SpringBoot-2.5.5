import { Component, OnInit } from "@angular/core";
import { MenusService } from "src/app/services/menus/menus.service";
import { OrdersService } from "src/app/services/orders/orders.service";

@Component({
  selector: "app-sandwich",
  templateUrl: "./sandwich.component.html",
  styleUrls: ["./sandwich.component.css"],
})
export class SandwichComponent implements OnInit {
  sandwichs;
  qte: number[] = [1];

  constructor(
    private MenusList: MenusService,
    private ordersList: OrdersService
  ) {}

  ngOnInit() {
    this.MenusList.getSandwichs().subscribe((data) => {
      this.sandwichs = data;
      for (let i = 0; i < data.length; i++) {
        this.qte.push(1);
      }
    });
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  // sandwichs = [
  //   {
  //     name: "Pepperoni Lovers",
  //     components:
  //       "Avocado, pepper jack cheese, green leaf lettuce, tomatillo salsa, chipotle aioli",
  //     price: "5$",
  //     addedToCard: false,
  //   },
  //   {
  //     name: "Chargrilled Chicken",
  //     components:
  //       "Roasted chicken, garlic red pepper hummus, green leaf lettuce, tomato cucumber salsa, pickled red onions, feta cheese",
  //     price: "12$",
  //     addedToCard: false,
  //   },
  //   {
  //     name: "Pesto & Sundried Tomato",
  //     components:
  //       "Marinated Italian chicken, basil pesto, sundried tomatoes, mozzarella cheese, arugula, vegenaise.",
  //     price: "17$",
  //     addedToCard: false,
  //   },
  // ];
  addToCard(sandwich, index) {
    sandwich.addedToCard = !sandwich.addedToCard;
    console.log("sandwich", sandwich);
    sandwich["qte"] = this.qte[index];
    this.ordersList.setOrders(sandwich);
  }
}
