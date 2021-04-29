import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import Pokemon from "../model/pokemon";

type Props = {
route: any;
  pokemon : Pokemon;
}
const PokemonDetails : FunctionComponent<Props> = ({ pokemon,route}) =>{
   const {pokemonne} = route.params
  return (
    <>
    <View>
      <Text>{pokemonne.name}</Text>
    </View>
    </>
  )
}

export default PokemonDetails;