import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-drink",
  templateUrl: "./drink.component.html",
  styleUrls: ["./drink.component.css"],
})
export class DrinkComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  drinks = [
    {
      name: "Coca-Cola",
      price: "10$",
      addedToCard: false,
    },
    {
      name: "Fanta",
      price: "12$",
      addedToCard: false,
    },
    {
      name: "Boga",
      price: "17$",
      addedToCard: false,
    },
  ];
  addToCard(drink) {
    drink.addedToCard = !drink.addedToCard;
  }
}
