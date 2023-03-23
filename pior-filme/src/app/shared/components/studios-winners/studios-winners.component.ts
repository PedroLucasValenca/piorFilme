import { sort } from './../../../models/movies';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-studios-winners',
  templateUrl: './studios-winners.component.html',
  styleUrls: ['./studios-winners.component.scss']
})
export class StudiosWinnersComponent implements OnInit {

  public studios: any;

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.getStudios();
  }


  getStudios() {
    this.moviesService.getStudiosWinners().subscribe( value => {
      console.log('value', value);
      this.studios = value.studios;

      this.studios = this.studios.sort((a: any, b: any) => b - a).slice(0, 3);
      let test = this.studios.slice(0, 3);
      console.log('studios', this.studios);
      console.log('test', test);
    })


  }

}
