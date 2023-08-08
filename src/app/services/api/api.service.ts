import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from "rxjs/operators";
import { GetAllCategoriesResponse } from './types/get-all-categories.response';

const defaultHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
}

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient) { }

    getAllCategories() {
        return this.http.get<GetAllCategoriesResponse>('https://fakestoreapi.com/products/categories',{headers : defaultHeaders})
            .pipe(
                catchError((error) => {
                    console.error(error)

                    return throwError(() => new Error('Something bad happened; please try again later.'));
                })
            )
    }
}
