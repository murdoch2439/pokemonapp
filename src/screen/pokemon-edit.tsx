import React, { FunctionComponent, useState } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import ButtonSubmit from "../component/boutons/buttonSubmit";
import CheckBoxComponent from "../component/checkboxComponent";
import { InputType } from "../component/common/input-type";
import InputComponent from "../component/InputComponent";
import Pokemon from "../model/pokemon";

type Props = {
  
  route : any;
  navigation : any
  
}
const PokemonEdit : FunctionComponent<Props> = ({route, navigation}) =>{
  const pokemon : Pokemon = route.params.pokemon
  
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
      <ScrollView>

      <View  >
        <View style={{alignSelf:'center', marginTop:10}}>
          
          <InputComponent type={InputType.Image} value={pokemon.picture} />
        </View>
        <View>
          <InputComponent type={InputType.Text} placeholder='Name' value={pokemon.name}  />
          <InputComponent type={InputType.Text} placeholder='CP'   value={pokemon.cp.toString()} keyboardType="phone-pad"
              maxLength={2}  />
          <InputComponent type={InputType.Text} placeholder='Ph'   value={pokemon.hp.toString()} keyboardType="phone-pad"
              maxLength={2}  />
          <CheckBoxComponent />
          
          
        </View>
          <ButtonSubmit title="Valider" handlePress={()=>{}} />
      </View>
      </ScrollView>

     </TouchableWithoutFeedback>
  )
}

export default PokemonEdit;