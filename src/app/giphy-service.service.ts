import { Gif } from './gif.model';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiphyServiceService {
  constructor(private http: HttpClient) {}

  getGifs(limit:number = 20, offset:number = 0) : Observable<ApiResponse>{
    return this.http.get<ApiResponse>(environment.apiUrl, {
      params: { api_key: environment.apiKey, limit, offset },
    }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
interface ApiResponse {
  data: Gif[],
  meta: {},
  pagination: {},
}
