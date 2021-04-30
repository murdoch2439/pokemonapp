import React, { FunctionComponent, useState } from "react";
import { View, Text } from "react-native";
import ButtonSubmit from "../component/boutons/buttonSubmit";
import { InputType } from "../component/common/input-type";
import InputComponent from "../component/InputComponent";
import Pokemon from "../model/pokemon";

type Props = {
  pokemon : Pokemon|null,
  
  
}
const PokemonEdit : FunctionComponent<Props> = ({pokemon}) =>{

  // const [name, setName] = useState('')
  return (
    <>
      <View>
        <View style={{alignSelf:'center', marginTop:5}}>
          
          <InputComponent type={InputType.Image}  />
        </View>
        <View>
          <InputComponent type={InputType.Text} placeholder='Name'   />
          
          <ButtonSubmit title="Valider" handlePress={()=>{}} />
        </View>
      </View>
    </>
  )
}

export default PokemonEdit;