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
  pokemons: any = [];

  ngOnInit(): void {

    const pokemons: any[] = [];

    this.http.get(this.url).subscribe((data: any) => {

      // obetenemos ocho números aleatorios para hacer la peticion 
      const nums: any = [];
      const num = () => Math.floor(Math.random() * data.count + 1);
      for (let i = 0; i < 8; i++) {
        nums.push(num());
      }
      
      for (let i = 0; i < nums.length; i++) {
        this.pokemonsService.getRandom(nums[i]).subscribe(data => pokemons.push(data))
      }  
      
    }); 

    this.pokemons = pokemons;

    console.log(this.pokemons);

  }

}
