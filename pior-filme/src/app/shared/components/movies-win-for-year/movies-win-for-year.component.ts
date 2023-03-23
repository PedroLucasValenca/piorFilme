import { Component } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies-win-for-year',
  templateUrl: './movies-win-for-year.component.html',
  styleUrls: ['./movies-win-for-year.component.scss']
})
export class MoviesWinForYearComponent {

  public winners: any;
  public year: any;

  constructor(private moviesService: MoviesService){}

  getMoviesForYear(valueParam: any) {
    let year = valueParam.target.value;
    this.moviesService.getMoviesForYear(year).subscribe( value => {
      console.log('value', value);
      this.winners = value;

      console.log('maxProducers', this.winners);
    })


  }

}
