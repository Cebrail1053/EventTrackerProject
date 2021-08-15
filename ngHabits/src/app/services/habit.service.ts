import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Habit } from '../models/habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  baseUrl = 'http://localhost:8084/';
  url = this.baseUrl + 'api/habit';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  private habits: Habit[] = [];

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  index(): Observable<Habit[]> {
    return this.http.get<Habit[]>(`${this.url}s`, this.httpOptions).pipe(
      catchError((err: any) => {
        console.error('HabitService.index(): error retrieving habit list');
        return throwError(err);
      })
    );
  }

  create(habit: Habit) {
    habit.achieved = false;

    return this.http.post<Habit>(`${this.url}`, habit, this.httpOptions).pipe(
      catchError((err: any) => {
        console.log("HabitService.create(): error sending new Habit");
        return throwError(err);
      })
    );
  }

  destroy(habitId: number) {
    return this.http.delete<Habit>(`${this.url}s/${habitId}`, this.httpOptions).pipe(
      catchError((err: any) => {
        console.error("HabitService.destroy(): error deleting Habit");
        return throwError(err);
      })
    );
  }

  update(habit: Habit) {
    return this.http.put<Habit>(`${this.url}`, habit, this.httpOptions).pipe(
      catchError((err: any) => {
        console.error("HabitService.update(): error updating Habit");
        return throwError(err);
      })
    );
  }

}
