import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pokemonsService: PokemonsService) {}

  pokemons: any;

  ngOnInit(): void {

    this.pokemons = this.pokemonsService.getRandom(8);

    //console.log(this.pokemons)
  }

}
