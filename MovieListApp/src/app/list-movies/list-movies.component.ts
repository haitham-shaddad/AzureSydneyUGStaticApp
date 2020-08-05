import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies: any;
  currentUser: any;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().then(data => this.movies = data);
    this.movieService.getCurrentUser().then(data => this.currentUser = data && data.userDetails);
  }

}
