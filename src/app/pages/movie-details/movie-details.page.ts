import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
 
  information = [{ 
    "id": '1',
    "foto": "assets/alberto.png",
    "nome": "Alberto",
    "cargo": "Presidente",
    "idade": 20 
  },
  { 
    "id": '2',
    "foto": "assets/bruno.png",
    "nome": "Bruno",
    "cargo": "Diretor",
    "idade": 21 
  },
  { 
    "id": '3',
    "foto": "assets/helena.png",
    "nome": "Helena",
    "cargo": "Gerente",
    "idade": 22
  },
  { 
    "id": '4',
    "foto": "assets/fernanda.png",
    "nome": "Fernanda",
    "cargo": "Desenvolvedor",
    "idade": 23
  },
  { 
    "id": '5',
    "foto": "assets/diego.png",
    "nome": "Diego",
    "cargo": "Desenvolvedor",
    "idade": 24
  },
  { 
    "id": '6',
    "foto": "assets/iris.png",
    "nome": "Iris",
    "cargo": "Desenvolvedor",
    "idade": 25 
  },
  { 
    "id": '7',
    "foto": "assets/hugo.png",
    "nome": "Hugo",
    "cargo": "Desenvolvedor",
    "idade": 26 
  },
  { 
    "id": '8',
    "foto": "assets/gustavo.png",
    "nome": "Gustavo",
    "cargo": "Desenvolvedor",
    "idade": 27
  },
  { 
    "id": '9',
    "foto": "assets/gabriel.png",
    "nome": "Gabriel",
    "cargo": "Desenvolvedor",
    "idade": 28
  }
]
  detalhe:{};
 id:string;
 


  constructor(private route: ActivatedRoute, private movieService: MovieService) { 
    
  }
 
  ngOnInit() {
    // Get the ID that was passed with the URL
    this.id = this.route.snapshot.paramMap.get('id').toString();
 
    // Get the information from the API
      console.log(this.id);
      for (let index = 0; index < this.information.length; index++) {
        console.log(this.information[index]);
          if(this.id==this.information[index].id){
            this.detalhe=this.information[index];
          }
          console.log(this.detalhe);
        
      }
      

  }
 
  openWebsite() {
   
  }
}
