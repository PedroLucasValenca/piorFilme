import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MoviesModel } from '../models/movies';
import { MultipleWinnersModel } from '../models/multiple-winners';
import { StudiosModel } from '../models/studios';
import { ProducersModel } from '../models/producers';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }


  getMoviesForYear(year: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/movies/?winner=true&year=${year}`)
  }

  getMovies(page: number, size: number, /* winner: boolean, year: number */): Observable<MoviesModel> {
    return this.http.get<any>(`${environment.apiUrl}/movies/?page=${page}&size=${size}`)
  }

  getMoviesMultipleWinners(): Observable<MultipleWinnersModel> {
    return this.http.get<any>(`${environment.apiUrl}/movies/?projection=years-with-multiple-winners`)
  }

  getStudiosWinners(): Observable<StudiosModel> {
    return this.http.get<any>(`${environment.apiUrl}/movies/?projection=studios-with-win-count`)
  }
  getMaxMinProducers(): Observable<ProducersModel> {
    return this.http.get<any>(`${environment.apiUrl}/movies/?projection=max-min-win-interval-for-producers`)
  }
}
