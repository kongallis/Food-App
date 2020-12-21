import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';


const type = "Bearer";
const credentials = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.LBHszzcjG4uVpYR-SpxUUbUEwhz8S8csczNW63L93xM";
const header = {
  headers: new HttpHeaders()
    .set('Authorization',  `${type} ${credentials}`)
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_URL = " https://fe-assignment-server.herokuapp.com/api/v1/food/categories";

  constructor(private http: HttpClient) { }


     // Fetches categories from API 
     getProducts(): Observable<Category[]> {
      console.log("FETCHES PRODUCTS");
      return this.http.get<Category[]>(this.API_URL, header);
    }
}
