import React, { FunctionComponent, useEffect, useState } from "react"
import { FlatList, View, StyleSheet } from "react-native";
import ButtonAdd from "../component/boutons/buttonAdd";
import PokemonCard from "../component/pokemon/pokemon-card";
import Pokemon from "../model/pokemon";
import PokemonService from "../service/pokemon-service";
import { MaterialIcons } from '@expo/vector-icons';
import PokemonServiceV2 from "../service/pokemon-service-v2";

type Props={
  navigation: any
}

const PokemonList : FunctionComponent<Props>  = ({navigation}) =>{

  const [pokemons, setPokemons] = useState<Pokemon[]>();

  useEffect(()=>{
    setPokemons(PokemonServiceV2.getAll());
  }, []);

  const handlePress = (pokemon:Pokemon) =>{
    console.log(pokemon.name);
    navigation.navigate('Details',{pokemon} )

  }
  
  
  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={pokemons}
        keyExtractor={ pokemon => String(pokemon.id)}
        renderItem={(pokemon) => <PokemonCard pokemon={pokemon.item} handlePress={()=>navigation.navigate('Details', {pokemon} )} />
        }

      />
      <ButtonAdd icon="plus" style={styles.icon} handlePress={()=>{navigation.navigate('Add')}}/>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
  },
  icon:{
    color:'white',
    fontSize:29,
  }
})

export default  PokemonList;