import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url : string = "/assets/data/studentData.json";

  constructor(
    private http: HttpClient
  ) { }

  getstudentData() {
    return this.http.get(
      this.url
    ).pipe(tap(res => res),
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Service Error');
  }
}
