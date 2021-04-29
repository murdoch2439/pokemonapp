import React, { FunctionComponent } from "react";
import { Image, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Pokemon from "../../model/pokemon";
import formatType from "../common/formatType";
import Helpers from "../common/helpers";

type Props = {
  pokemon : Pokemon;
  handlePress: any;
}
const PokemonCard : FunctionComponent<Props> = ({pokemon, handlePress}) => {

  return(
    <>
    <TouchableWithoutFeedback onPress={handlePress}>

     <View style={styles.container}>
        <View style={styles.pictureContainer}>

          <Image source={{uri:pokemon.picture}} style={styles.image} />
        </View>
        <View style={{padding:10}}>
          <Text style={styles.title}>{pokemon.name}</Text>
          {/* <Text>{pokemon.created}</Text> */}
         <View style={styles.types}>

            {
            pokemon.types.map((type, id)=>
              (<Text key={id} style={ formatType(type).type}>{type}</Text>))
            }
         </View>
          
          <Text>Point de vie</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
      
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    height:200,
    // width:'90%',
    backgroundColor:'pink',
    marginBottom:10,
    borderRadius:5,
    // shadowColor:'black',
    borderWidth:3,
    borderStyle:'dotted',
    borderColor:'pink'
  },
  pictureContainer:{
    backgroundColor:'#E5E5E5',
    width:'45%',
    height:'100%',
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5
    // paddingHorizontal:10,
  },
  image:{
    height:'100%',
    width:'100%',
    alignSelf:'center',
    resizeMode:'cover'

    
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
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


export default PokemonCard;