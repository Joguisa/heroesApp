import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radious: 5px;
    }
  `]
})

export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( private activateRoute: ActivatedRoute, 
               private heroesService: HeroesService,
               private router: Router) {
  
  }
  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroePorId(id) )
    )
    .subscribe( heroe => this.heroe = heroe); // destructuracion dentro del suscribe
  }

  regresar() {
    this.router.navigate(['/heroes/listado'])
  }

}
