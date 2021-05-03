import POKEMONS from "../model/mock-pokemons";
import Pokemon from "../model/pokemon";

export default class PokemonServiceV2{

    private static pokemonList : Pokemon[] = POKEMONS;
    static isThereNewsAvaible : boolean = true

    static total() : number{
        return this.pokemonList.length;
    }

    static getAll() : Pokemon[]{
        this.isThereNewsAvaible = false
        return this.pokemonList
    }
    
    static save(pokemon : Pokemon) : boolean{
        return pokemon.id > 0 ? this.update(pokemon) : this.create(pokemon)
    }

    private static update(pokemon : Pokemon) : boolean{
        this.pokemonList[pokemon.id-1] = pokemon;
        this.isThereNewsAvaible = true
        return true;
    }

    private static create(pokemon : Pokemon) : boolean{
        pokemon.id = this.total() + 1
        this.pokemonList.push(pokemon)
        this.isThereNewsAvaible = true
        return true
    }

    static delete(pokemonId : number) : boolean{
        return true
    }
}