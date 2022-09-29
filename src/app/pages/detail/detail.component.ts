import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private pokemonsService: PokemonsService, 
    private location: Location, 
    private route: ActivatedRoute
  ) { }

  goBack(): void {
    this.location.back();
  }

  id: any;
  pokemon: any;

  ngOnInit(): void {

    this.route.params.subscribe(params => this.id = params['id'])
    // console.log(this.id)
    this.pokemon = this.pokemonsService.getDetail(this.id);
    // console.log(this.pokemon)
   
  }

}
