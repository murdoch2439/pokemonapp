import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import { InputType } from "../component/common/input-type";
import InputComponent from "../component/InputComponent";
import Pokemon from "../model/pokemon";

type Props = {
  pokemon : Pokemon|null
}
const PokemonEdit : FunctionComponent<Props> = ({pokemon}) =>{


  return (
    <>
      <View>
        <View>
          <Text>Photo</Text>
          <InputComponent type={InputType.Image} placeholder='Name' />
        </View>
        <View>
          <InputComponent type={InputType.Text} placeholder='Name' />
        </View>
      </View>
    </>
  )
}

export default PokemonEdit;