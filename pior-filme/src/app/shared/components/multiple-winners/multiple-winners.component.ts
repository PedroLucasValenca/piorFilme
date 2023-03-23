import { Component, OnInit } from '@angular/core';
import { MultipleWinnersModel } from 'src/app/models/multiple-winners';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-multiple-winners',
  templateUrl: './multiple-winners.component.html',
  styleUrls: ['./multiple-winners.component.scss']
})
export class MultipleWinnersComponent implements OnInit {

  public winners: any ;

  constructor(private moviesService: MoviesService){}
  ngOnInit(): void {
    this.getWinners();
  }


  getWinners() {
    this.moviesService.getMoviesMultipleWinners().subscribe( value => {
      console.log('value', value);
      this.winners = value.years;
    })
    console.log('winners', this.winners);
  }

}
