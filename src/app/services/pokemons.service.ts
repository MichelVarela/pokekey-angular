import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' // nos permite solicitar al inyector de dependencias los servicios creados
})

export class PokemonsService {

  constructor(private http: HttpClient) {}

  getRandom(n: number) {

    const pokemons: any[] = [];

    this.http.get(environment.URL_BASE).subscribe((data: any) => {

      // obetenemos n números aleatorios para hacer la peticion 
      const nums: any = [];
      const num = () => Math.floor(Math.random() * data.count + 1);
      for (let i = 0; i < n; i++) {
        nums.push(num());
      }
      
      // realizamos las peticiones de pokemon aleatorias
      for (let i = 0; i < nums.length; i++) {
        this.http.get(environment.URL_BASE + nums[i]).subscribe((data: any) => {
          // realizamos la peticion a la url base con los datos del pokemon
          this.http.get(data.varieties[0].pokemon.url).subscribe(data => pokemons.push(data));
        })
      } 
      
    })

    return pokemons;

  }

  getDetail(id: string) {

    const pokemon: any = []; 
    
    this.http.get(`${environment.URL_BASE}${id}`).subscribe((data: any) => {

      const des = data.flavor_text_entries.filter((el: any) => el.language.name === 'es');

      this.http.get(data.varieties[0].pokemon.url).subscribe((data: any) => {
        //console.log(data);

      const dataA = {
          id: data.id,
          order: data.order, 
          name: data.name, 
          sprite: data.sprites.other['official-artwork'].front_default ? data.sprites.other['official-artwork'].front_default : null, 
          description: des[0].flavor_text, 
          weight: data.weight, 
          height: data.height, 
          typeBase: data.types[0].type.name,
          typeSec: data.types[1] ? data.types[1].type.name : null,
          moveBase: data.moves[0] ? data.moves[0].move.name : null,
          moveSec: data.moves[1] ? data.moves[1].move.name : null, 
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          special_attack: data.stats[3].base_stat,
          special_defense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        }

        pokemon.push(dataA);
        
      })
    })

    //console.log(pokemon);
    return pokemon;

  }

  getRelated(type: string) {
    
    const pokemons: any[] = [];

    this.http.get(environment.URL_TYPE).subscribe((data: any) => {

      const pokemon_type = data.results.find((el: any) => el.name == type );
      
      this.http.get(pokemon_type.url).subscribe((data: any) => {

        // obetenemos n números aleatorios para hacer la peticion 
        const nums: any = [];
        const num = () => Math.floor(Math.random() * data.pokemon.length + 1);
        for (let i = 0; i < 8; i++) {
          nums.push(num());
        }

        const pokemon_random: any[] = [];
        
        for (let i = 0; i < nums.length; i++) {
          data.pokemon.filter((el: any, item: any) => { 
            if (item == nums[i]) {
              pokemon_random.push(el)
            }
          })
        }

        // console.log(pokemon_random);
        const pokemon_data = pokemon_random.map((el: any) => {
          console.log(el.pokemon.url);
          this.http.get(el.pokemon.url).subscribe((data: any) => [data]);
        });

        console.log(pokemon_data);
        
        
      }) 
      
    })

    // console.log(pokemons);
    
    // return pokemons;
    
  }

}
