import React, { FunctionComponent } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import ButtonAdd from "../component/boutons/buttonAdd";
import formatType from "../component/common/formatType";
import Pokemon from "../model/pokemon";
import { MaterialCommunityIcons } from '@expo/vector-icons';
type Props = {
  route: any;
  navigation:any;
  pokemon2 : Pokemon;
}
const PokemonDetails : FunctionComponent<Props> = ({route, navigation}) =>{
   const pokemon:Pokemon = route.params.pokemon.item
  return (
    <>
    <View style={styles.container} >
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
      <ButtonAdd style={styles.icon} icon="pencil" handlePress={()=>navigation.navigate('Add', {pokemon})}/>

      
    </View>
    </>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'red',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  },
  types:{
    flexDirection:'row',
  },
  type:{
    fontSize:18,
    marginRight:5,
  },
  icon:{
    fontSize:28,
    color:'white'
  }
})

export default PokemonDetails;