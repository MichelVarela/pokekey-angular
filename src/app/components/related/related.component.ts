import { Component, Input, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit {

  @Input() type: any;
  @Input() pokemons: any;

  constructor(private pokemonsService: PokemonsService,) { }

  ngOnInit(): void {

    this.pokemonsService.getRelated('bug');
  }

}
