import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-order",
  templateUrl: "./add-order.component.html",
  styleUrls: ["./add-order.component.css"],
})
export class AddOrderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  pizza = false;
  sandwich = false;
  drink = false;
  setMenu(item) {
    if (item == "pizza") {
      this.pizza = true;
      this.sandwich = false;
      this.drink = false;
      this.active = "pizza";
    } else if (item == "sandwich") {
      this.sandwich = true;
      this.pizza = false;
      this.drink = false;
      this.active = "sandwich";
    } else if (item == "drink") {
      this.drink = true;
      this.sandwich = false;
      this.pizza = false;
      this.active = "drink";
    }
  }

  active = "";
}
