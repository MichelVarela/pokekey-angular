import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root' // nos permite solicitar al inyector de dependencias los servicios creados
})

export class PokemonsService {

  url: string = 'https://pokeapi.co/api/v2/pokemon-species/';

  constructor(private http: HttpClient) {}

  getRandom(id: any) {

    return this.http.get(`${this.url}${id}`)

    /* this.http.get(this.url).subscribe((data: any) => {

      // obetenemos ocho números aleatorios para hacer la peticion 
      const nums: any = [];
      const num = () => Math.floor(Math.random() * data.count + 1);
      for (let i = 0; i < 8; i++) {
        nums.push(num());
      }
      
      for (let i = 0; i < nums.length; i++) {
        this.http.get(`${this.url}${nums[i]}`).subscribe((data: any) => console.log(data))
      } 
      
    }) */
  }

}
