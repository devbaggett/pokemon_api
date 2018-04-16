import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


var bulbasaur;
var bulb_ability_1, bulb_ability_2;
// var poke_arr = [];

@Injectable()
export class HttpService {
  	constructor(private _http: HttpClient) {
  		this.getPokemon();
  		// this.getAll();
  	}
	getPokemon(){
  		bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  		bulbasaur.subscribe(data => {
			console.log('Got our pokemon!', data);
			bulb_ability_1 = data['abilities'][0].ability.name;
			bulb_ability_2 = data['abilities'][1].ability.name;
			console.log(bulb_ability_1);
			console.log(bulb_ability_2);
  		})
  	}
  	// getAll(){
  	// 	// let poke = this._http.get('https://pokeapi.co/api/v2/pokemon/' + i + '/');
  	// 	for (var i = 2; i < 25; i++){
  	// 		let poke = this._http.get('https://pokeapi.co/api/v2/pokemon/' + i + '/');
  	// 		poke.subscribe(data => {
  	// 			console.log(data);
  	// 		})
  	// 	}
  		
  	// }
}
