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
  onChange : any;
  name : string;
  // pokemon : Pokemon|null
}
const InputComponent : FunctionComponent<Props> = ({name, onChange, placeholder, value, type, maxLength, keyboardType}) =>{


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
          <ImagePicker name={name} onChange={onChange} uri={value} />
        </View>

      : type === InputType.Text? 
        <View>
          
            <TextInput onChangeText={ text => onChange(name, text)}
              value={value}
              placeholder={placeholder}
              maxLength={30}
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