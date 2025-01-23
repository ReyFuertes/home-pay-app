import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ApplicationService {
  private $sidebarVisibility: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public getSidebarVisibility(): Observable<boolean> {
    return this.$sidebarVisibility.asObservable();
  }

  public setSidebarVisibility(value: boolean) {
    this.$sidebarVisibility.next(value);
  }
}