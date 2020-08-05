import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }


  
getMovies() {
   return fetch('api/GetMovieList').then(data => data.json());
}
}
