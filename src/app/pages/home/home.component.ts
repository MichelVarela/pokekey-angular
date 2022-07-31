import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pokemonsService: PokemonsService, private http: HttpClient) {}

  url: string = 'https://pokeapi.co/api/v2/pokemon-species/';
  pokemons: any;

  ngOnInit(): void {

    this.pokemons = this.pokemonsService.getRandom();

    //console.log(this.pokemons)
  }

}
