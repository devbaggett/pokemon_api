import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  	constructor(private _http: HttpClient) {
  		// this.getPokemon();
  		this.getAll();
  	}
  	const bulb1;
  	// getPokemon(){
  	// 	let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  	// 	bulbasaur.subscribe(data => {
  	// 		console.log('Got our pokemon!', data);
  	// 		let abilities = data['abilities'];
  	// 		for (let i in abilities){
  	// 			console.log(abilities[i].ability.name);
  	// 		}
  	// 	})
  	// }
  	getAll(){
  		let new_arr = [];
  		let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  		bulbasaur.subscribe(data => {
  			let abilities = data['abilities'];
  			let bulb1 = abilities[0].ability.name;
  			let bulb2 = abilities[1].ability.name;
  		for (var i = 2; i < 25; i++){
  			let poke = this._http.get('https://pokeapi.co/api/v2/pokemon/' + i + '/');
  			poke.subscribe(data => {
  				if (bulb1 == data['abilities'][0].ability.name ||
  					bulb2 == data['abilities'][0].ability.name ||
  					bulb1 == data['abilities'][1].ability.name ||
  					bulb2 == data['abilities'][1].ability.name ||){
  						console.log(data.name + "shares the same ability!");
  				}
  				else{
  					console.log("Bulbasaur doesn't share the same abilities!")
  				}
  				
  			})
  		}
  	}
}
