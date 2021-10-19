import { Component, OnInit } from "@angular/core";
import { ClaimsService } from "src/app/services/claims/claims.service";
import { Observable, interval, Subscription } from "rxjs";

@Component({
  selector: "app-claim",
  templateUrl: "./claim.component.html",
  styleUrls: ["./claim.component.css"],
})
export class ClaimComponent implements OnInit {
  claims;
  private updateSubscription: Subscription;

  constructor(private claimsList: ClaimsService) {}
  ngOnInit() {
    this.claimsList.getClaims().subscribe((data) => {
      this.claims = data;
      console.log(this.claims);
    });

    this.updateSubscription = interval(1000).subscribe(() => {
      this.claimsList.getClaims().subscribe((data) => {
        this.claims = data;
      });
    });
  }
  deleteClaim(claim) {
    this.claimsList.deleteClaim(claim);
  }
}
