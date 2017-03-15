import { Injectable }    from '@angular/core';
import { Headers, Http,Response  } from '@angular/http';
import {Snippet} from './snippet.component'
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckoutService {

    private checkoutURL = 'http://localhost/inappBackend/snippet';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }

    getCheckout():Observable<Snippet>{
        return this.http.get(this.checkoutURL)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || { };
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
}