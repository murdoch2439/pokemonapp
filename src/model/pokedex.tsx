import Pokemon from "./pokemon";

export default class Pokedex{

    constructor(total: number, pokemons: Pokemon[]) {
        this.total = total;
        this.pokemons = pokemons;
    }

    total : number;
    pokemons : Pokemon[];
}
