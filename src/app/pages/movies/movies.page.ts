
import { MovieService, SearchType } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetailsPage } from '../movie-details/movie-details.page';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
 
  results:any
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 
  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(private movieService: MovieService,public navCtrl: NavController) {
    this.results= [{ 
      "id": 1,
      "foto": "assets/alberto.png",
      "nome": "Alberto",
      "cargo": "Presidente",
      "idade": 20 
    },
    { 
      "id": 2,
      "foto": "assets/bruno.png",
      "nome": "Bruno",
      "cargo": "Diretor",
      "idade": 21 
    },
    { 
      "id": 3,
      "foto": "assets/helena.png",
      "nome": "Helena",
      "cargo": "Gerente",
      "idade": 22
    },
    { 
      "id": 4,
      "foto": "assets/fernanda.png",
      "nome": "Fernanda",
      "cargo": "Desenvolvedor",
      "idade": 23
    },
    { 
      "id": 5,
      "foto": "assets/diego.png",
      "nome": "Diego",
      "cargo": "Desenvolvedor",
      "idade": 24
    },
    { 
      "id": 6,
      "foto": "assets/iris.png",
      "nome": "Iris",
      "cargo": "Desenvolvedor",
      "idade": 25 
    },
    { 
      "id": 7,
      "foto": "assets/hugo.png",
      "nome": "Hugo",
      "cargo": "Desenvolvedor",
      "idade": 26 
    },
    { 
      "id": 8,
      "foto": "assets/gustavo.png",
      "nome": "Gustavo",
      "cargo": "Desenvolvedor",
      "idade": 27
    },
    { 
      "id": 9,
      "foto": "assets/gabriel.png",
      "nome": "Gabriel",
      "cargo": "Desenvolvedor",
      "idade": 28
    }
  ]
   }
 
  ngOnInit() { }
 
  detalhes(item:any){
    this.navCtrl.navigateRoot('movies/detalhes/'+item);
  }
 
}