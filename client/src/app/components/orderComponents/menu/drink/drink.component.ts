import { Component, OnInit } from "@angular/core";
import { MenusService } from "src/app/services/menus/menus.service";

@Component({
  selector: "app-drink",
  templateUrl: "./drink.component.html",
  styleUrls: ["./drink.component.css"],
})
export class DrinkComponent implements OnInit {
  drinks;
  constructor(private MenusList: MenusService) {}

  ngOnInit() {
    this.MenusList.getDrinks().subscribe((data) => {
      this.drinks = data;
    });
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
  addToCard(drink) {
    drink.addedToCard = !drink.addedToCard;
  }
}
