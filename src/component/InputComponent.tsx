import React, { FunctionComponent, useState } from "react";
import { View, TextInput, StyleSheet, Text} from "react-native";
import Pokemon from "../model/pokemon";
import { InputType } from "./common/input-type";
import ImagePicker from "./common/Image-picker";

type Props = {
  placeholder:string;
  value: string;
  type: InputType;
  maxLength:number;
  keyboardType:string;
  
  // pokemon : Pokemon|null
}
const InputComponent : FunctionComponent<Props> = ({placeholder, value, type, maxLength, keyboardType}) =>{


  const [focused, setFocused] = useState(false)

  const changeBorderColor = () =>{
    
    if(focused){
      return 'purple'
    }
    
    else{
      return '#E5E5E5'
    }
  }


  return (
    <>
      { type === InputType.Image ?
        <View>
          <ImagePicker uri={value} />
        </View>

      : type === InputType.Text? 
        <View>
          
            <TextInput 
              value={value}
              placeholder={placeholder}
              maxLength={maxLength}
              keyboardType={keyboardType}
              style={[styles.input, {borderColor:changeBorderColor()}]}  
              onFocus={() =>{setFocused(true)}}
              onBlur={() =>{setFocused(false)}}
            />

            
            
        
        </View>: null


    }
      
    </>
  )
}

const styles = StyleSheet.create({
  input:{
    height:60,
    borderBottomWidth:2,
    // backgroundColor:'yellow',
    margin:10,
    paddingLeft:10,
  }
})

export default InputComponent;