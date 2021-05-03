import POKEMONS from "../model/mock-pokemons";
import Pokemon from "../model/pokemon";

export default class PokemonServiceV2{

    static pokemonList : Pokemon[] = POKEMONS;

    static getAll() : Pokemon[]{
        return this.pokemonList
    }

    
    static save(pokemon : Pokemon) : boolean{
        return pokemon.id > 0 ? this.update(pokemon) : this.create(pokemon)
    }

    private static update(pokemon : Pokemon) : boolean{
        this.pokemonList[pokemon.id] = pokemon;
        return true;
    }

    private static create(pokemon : Pokemon) : boolean{
        return true
    }

    static delete(pokemonId : number) : boolean{
        return true
    }
}