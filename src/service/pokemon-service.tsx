import POKEMONS from "../model/mock-pokemons";
import Pokemon from "../model/pokemon";

export default class PokemonService{
  static baseUrl = "http://192.168.8.104:5000/pokemons";


  static getAllMocks():Pokemon[]{
    return POKEMONS
  }

  static getAll(): Promise<Pokemon[]>{
    return fetch(this.baseUrl).then(response => response.json());
  }
  
}