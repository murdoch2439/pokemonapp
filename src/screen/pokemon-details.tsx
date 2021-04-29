import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";
import Pokemon from "../model/pokemon";

type Props = {
route: any;
  pokemon2 : Pokemon;
}
const PokemonDetails : FunctionComponent<Props> = ({route}) =>{
   const pokemon = route.params.pokemon.item
  return (
    <>
    <View>
      <Image source={{uri:pokemon.image}} />
      <Text>{pokemon.name}</Text>
      <Text>{pokemon.created.toString()}</Text>
    </View>
    </>
  )
}

export default PokemonDetails;