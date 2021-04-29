import React, { FunctionComponent, useEffect, useState } from "react"
import { FlatList } from "react-native";
import PokemonCard from "../component/pokemon/pokemon-card";
import Pokemon from "../model/pokemon";
import PokemonService from "../service/pokemon-service";

type Props={
  navigation: any
}

const PokemonList : FunctionComponent = () =>{

  const [pokemons, setPokemons] = useState<Pokemon[]>();

  useEffect(()=>{
    setPokemons(PokemonService.getAllMocks());
  }, []);

  const handlePress = (pokemon:Pokemon) =>{

  }
  
  return (
    <>
      <FlatList 
        data={pokemons}
        keyExtractor={ pokemon => pokemon.id.toString()}
        renderItem={(pokemon) => <PokemonCard pokemon={pokemon.item} handlePress={handlePress} />
        }

      />
    </>
  );
}

export default  PokemonList;