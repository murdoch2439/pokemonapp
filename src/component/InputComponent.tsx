import React, { FunctionComponent, useEffect, useState } from "react";
import { View, Image, TextInput, StyleSheet} from "react-native";
import Pokemon from "../model/pokemon";
import { InputType } from "./common/input-type";
import ImagePicker from "./common/Image-picker";

type Props = {
  placeholder:string;
  type: InputType;
  // pokemon : Pokemon|null
}
const InputComponent : FunctionComponent<Props> = ({placeholder, type}) =>{

  return (
    <>
      { type == InputType.Image ?
        <View>
          <ImagePicker />
        </View>

      : type == InputType.Text? 
        <View>
          
            <TextInput placeholder={placeholder} style={styles.input} />
        
        </View>:

        <View>

            <TextInput placeholder={placeholder} style={styles.input} />

        </View>

    }
      
    </>
  )
}

const styles = StyleSheet.create({
  input:{
    height:60,
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:'pink',
  }
})

export default InputComponent;