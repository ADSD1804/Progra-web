import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = 'https://api.escuelajs.co/api/v1/categories';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  getCategories(): Observable<any>{
    return this.http.get(URL);
  }

  createCategory(categories: any){
    return this.http.post(URL, categories);
  }

  deleteC(id: number): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`)
  }

  updateCategory(id: any, category: any) {
    return this.http.put(`${URL}/${id}`, category);
  }
}


