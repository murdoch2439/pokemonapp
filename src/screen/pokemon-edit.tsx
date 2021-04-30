import React, { FunctionComponent, useState } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import ButtonSubmit from "../component/boutons/buttonSubmit";
import CheckBoxComponent from "../component/checkboxComponent";
import { InputType } from "../component/common/input-type";
import InputComponent from "../component/InputComponent";
import Pokemon from "../model/pokemon";

type Props = {
  pokemon : Pokemon|null,
  
  
}
const PokemonEdit : FunctionComponent<Props> = ({pokemon}) =>{

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
      <ScrollView>

      <View  >
        <View style={{alignSelf:'center', marginTop:10}}>
          
          <InputComponent type={InputType.Image}  />
        </View>
        <View>
          <InputComponent type={InputType.Text} placeholder='Name'   />
          <InputComponent type={InputType.Text} placeholder='Pc' keyboardType="phone-pad"
              maxLength={2}  />
          <InputComponent type={InputType.Text} placeholder='Ph' keyboardType="phone-pad"
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