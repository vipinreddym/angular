import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


 movies = [
  {
  id:1,
  name:"kaala",
  genere:"action",
  language:"telugu"
  },
  {
    id:2,
    name:"abhimanyudu",
    genere:"thriller",
    language:"telugu"
  },
  {
    id:3,
    name:"nela ticket",
    genere:"comedy",
    language:"telugu"
  }

]
}