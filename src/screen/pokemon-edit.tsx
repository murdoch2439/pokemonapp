import React, { FunctionComponent, useState } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import ButtonSubmit from "../component/boutons/buttonSubmit";
import { InputType } from "../component/common/input-type";
import InputComponent from "../component/InputComponent";
import Pokemon from "../model/pokemon";

type Props = {
  pokemon : Pokemon|null,
  
  
}
const PokemonEdit : FunctionComponent<Props> = ({pokemon}) =>{

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
      <View style={{flex:1}} >
        <View style={{alignSelf:'center', marginTop:5}}>
          
          <InputComponent type={InputType.Image}  />
        </View>
        <View>
          <InputComponent type={InputType.Text} placeholder='Name'   />
          
        </View>
          <ButtonSubmit title="Valider" handlePress={()=>{}} />
      </View>
     </TouchableWithoutFeedback>
  )
}

export default PokemonEdit;