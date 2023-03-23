import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MoviesModel } from 'src/app/models/movies';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public listMovies: Array<any> = [];
  public contentMovies: Array<MoviesModel> = [];
  public page = 0;
  public size = 15;
  public totalPages: Array<Number> = [];
  public startPage: number = 1;
  public endPage: number = 0;
  public currentPage: number = 0;

  constructor(private moviesService: MoviesService){}


  ngOnInit(): void {

    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies( this.page, this.size ).subscribe( value => {
      this.contentMovies.push(value);
      this.endPage = this.contentMovies[0].totalPages
      this.totalPages = Array.from(Array((this.endPage + 1) - this.startPage).keys()).map(i => this.startPage + i);;
      value.content.map( data => {
        return this.listMovies.push(data);
      })
    })
    console.log('listMovies', this.listMovies);
    console.log('contentMovies', this.contentMovies);
  }


  getMoviesPage(page: any) {
    //console.log('pageee', page.target.innerHTML);
    this.currentPage = page - 1;
    this.listMovies = [];
    this.page = page -1;



    this.moviesService.getMovies( page, this.size ).subscribe( value => {
      this.contentMovies.push(value);
      console.log('listMovies getMoviesPage', this.listMovies);
      console.log('contentMovies getMoviesPage', this.contentMovies);
      value.content.map( data => {
        return this.listMovies.push(data);
      })
    })
  }


  filterYear( param : any) {
    if (param.target.value != '') {
      let yearSearch = parseFloat(param.target.value);
      this.listMovies = this.listMovies.filter( value => value.year === yearSearch );
    } else {
      this.getMoviesPage(this.currentPage);
    }
  }



}
