import { Component } from '@angular/core';
import { CheckoutService } from './checkout.service';
@Component({
  selector: 'my-app',
  template: "<div id='klarna'></div>",
  providers: [CheckoutService],
})
export class AppComponent  {
  constructor(private checkoutService: CheckoutService) { }
snippet ="";
  ngOnInit(): void {
    this.checkoutService.getCheckout().subscribe(
        snippet => { var t = document.getElementById("klarna"),
         n = document.createRange();
    n.setStart(t, 0),
        t.appendChild(n.createContextualFragment(snippet.snippet))})
  }
}
