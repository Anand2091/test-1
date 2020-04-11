import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  catalogURL = '/api/catalog';
  categoryAddURL  = '/api/catalog/categoryadd';
  categoryListURL = '/api/catalog/categorylist';
  parentCategoryURL = '/api/catalog/getparentcategory';

  constructor(private http: HttpClient) { }


  categoryAdd(data: any): Observable<any> {
    
    // const options = encodeURIComponent(JSON.stringify(param));
    const url = `${this.categoryAddURL}`;

    // const options = {params: {params:param}};
    return this.http.post<any>(url, data)
      .pipe(
        tap(data =>{ console.log('Category Add Successfully'); }),
        catchError(this.handleError<any>('Login', { "status": false, "message": "Category Add Error" }))
      );
  }

  getAllCategory(): Observable<any> {
    
    // const options = encodeURIComponent(JSON.stringify(param));
    const url = `${this.categoryListURL}`;

    // const options = {params: {params:param}};
    return this.http.get<any>(url)
      .pipe(
        tap(data =>{ console.log('Category Add Successfully'); }),
        catchError(this.handleError<any>('Login', { "status": false, "message": "Category Add Error" }))
      );
  }

  getParentCategory(): Observable<any> {
    
    // const options = encodeURIComponent(JSON.stringify(param));
    const url = `${this.parentCategoryURL}`;

    // const options = {params: {params:param}};
    return this.http.get<any>(url)
      .pipe(
        tap(data =>{ console.log('Get Parent Category Successfully'); }),
        catchError(this.handleError<any>('Login', { "status": false, "message": "Get Parent Category Error" }))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //return of(result as T);
    return of(result as T);
    };
    
  }

}
