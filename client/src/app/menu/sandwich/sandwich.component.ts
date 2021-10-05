import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sandwich",
  templateUrl: "./sandwich.component.html",
  styleUrls: ["./sandwich.component.css"],
})
export class SandwichComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  sandwichs = [
    {
      name: "Pepperoni Lovers",
      components:
        "Avocado, pepper jack cheese, green leaf lettuce, tomatillo salsa, chipotle aioli",
      price: "5$",
      addedToCard: false,
    },
    {
      name: "Chargrilled Chicken",
      components:
        "Roasted chicken, garlic red pepper hummus, green leaf lettuce, tomato cucumber salsa, pickled red onions, feta cheese",
      price: "12$",
      addedToCard: false,
    },
    {
      name: "Pesto & Sundried Tomato",
      components:
        "Marinated Italian chicken, basil pesto, sundried tomatoes, mozzarella cheese, arugula, vegenaise.",
      price: "17$",
      addedToCard: false,
    },
  ];
  addToCard(sandwich) {
    sandwich.addedToCard = !sandwich.addedToCard;
  }
}
