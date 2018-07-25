import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-moviedata',
  templateUrl: './moviedata.component.html',
  styleUrls: ['./moviedata.component.css']
})
export class MoviedataComponent implements OnInit {

  constructor(
    private route : ActivatedRoute
  ) { }
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
  movie = {
    moviename:'',
    language:'',
    genere:''

  };
  public id;
  ngOnInit() {
    
    this.route.params.subscribe((params)=>{
      this.id = params['id'];
      console.log(this.id);
    })
   this.filter();

  }
  filter()
  {
    for (var i=0;i<this.movies.length;i++)
    {
      if(this.id==this.movies[i].id)
      {
        this.movie.moviename = this.movies[i].name;
        this.movie.language = this.movies[i].language;
        this.movie.genere = this.movies[i].genere;
        break;
      }
    }
  }

}
