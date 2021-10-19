import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClaimsService {
  private apiServerUrl = "http://localhost:9191/api";
  constructor(private http: HttpClient) {}
  getClaims(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/claim`);
  }
  claims = this.getClaims();

  setClaims(newClaim) {
    let item = {
      object: newClaim.object,
      description: newClaim.description,
      user_id: newClaim.user_id,
      deleted: 1,
      created_at: newClaim.created_at,
      updated_at: null,
    };
    //   this.orders.push(item);

    return this.http
      .post<any>(`${this.apiServerUrl}/claim`, item)
      .subscribe((data) => {
        this.claims = data;
        // this.orders.push(item);
      });
  }
  deleteClaim(claim) {
    let item = {
      id: claim.id,
      object: claim.object,
      description: claim.description,
      user_id: claim.user_id,
      deleted: 1,
      created_at: claim.created_at,
      updated_at: null,
    };
    //   this.orders.push(item);
    return this.http
      .put<any>(`${this.apiServerUrl}/claim`, item)
      .subscribe((data) => {
        this.claims = data;
      });
  }
}
