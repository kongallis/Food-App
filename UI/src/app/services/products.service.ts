import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';


const type = "Bearer";
const credentials = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.LBHszzcjG4uVpYR-SpxUUbUEwhz8S8csczNW63L93xM";
const header = {
  headers: new HttpHeaders()
    .set('Authorization',  `${type} ${credentials}`)
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = " https://fe-assignment-server.herokuapp.com/api/v1/food/products";

  constructor(private http: HttpClient) { }


     // Fetches products from API 
     getProducts(): Observable<Product[]> {
       console.log("FETCHES PRODUCTS");
       return this.http.get<Product[]>(this.API_URL, header);
     }


    }

