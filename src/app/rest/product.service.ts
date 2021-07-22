import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {}

    getProducts(): Observable<any> {
        const headers: HttpHeaders = new HttpHeaders();
        //headers.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
        return this.http.get<IProduct[]>(environment.backendUrl + 'products', { headers })
    }

    delete(id: number): Observable<any> {
        const headers: HttpHeaders = new HttpHeaders();
        //headers.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
        return this.http.delete(environment.backendUrl + 'products/' + id, { headers })
    }

}