import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-max-min-producers',
  templateUrl: './max-min-producers.component.html',
  styleUrls: ['./max-min-producers.component.scss']
})
export class MaxMinProducersComponent implements OnInit {

  public maxProducers: any;
  public minProducers: any;

  constructor(private moviesService: MoviesService){}


  ngOnInit(): void {
    this.getProducers();
  }


  getProducers() {
    this.moviesService.getMaxMinProducers().subscribe( value => {
      console.log('value', value);
      this.maxProducers = value.max;
      this.minProducers = value.min;

      console.log('maxProducers', this.maxProducers);
      console.log('minProducers', this.minProducers);
    })


  }

}
