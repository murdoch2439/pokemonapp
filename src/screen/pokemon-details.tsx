import React, { FunctionComponent } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import formatType from "../component/common/formatType";
import Pokemon from "../model/pokemon";

type Props = {
route: any;
  pokemon2 : Pokemon;
}
const PokemonDetails : FunctionComponent<Props> = ({route}) =>{
   const pokemon:Pokemon = route.params.pokemon.item
  return (
    <>
    <View>
      <Image source={{uri:pokemon.picture}} style={{height:200, resizeMode:'contain'}}/>
      <View style={{paddingHorizontal:10}}>
      <Text style={styles.title}>{pokemon.name}</Text>

      <Text>{pokemon.created.toString()}</Text>
      <View style={styles.types}>

            {
            pokemon.types.map((type, id)=>
              (<Text key={id} style={ formatType(type).type}>{type}</Text>))
            }
         </View>
         <Text>{pokemon.hp}</Text>
         <Text>{pokemon.cp}</Text>

      </View>
      
    </View>
    </>
  )
}

const styles=StyleSheet.create({
  title:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  },
  types:{
    flexDirection:'row',
    // paddingHorizontal:10
  },
  type:{
    fontSize:18,
    marginRight:5,
  }
})

export default PokemonDetails;