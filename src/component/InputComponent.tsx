import React, { FunctionComponent, useState } from "react";
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
          <ImagePicker />
        </View>

      : type === InputType.Text? 
        <View>
          
            <TextInput 
              placeholder={placeholder} 
              style={[styles.input, {borderColor:changeBorderColor()}]}  
              onFocus={() =>{setFocused(true)}}
              onBlur={() =>{setFocused(false)}}
            />
            
        
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
    borderBottomWidth:2,
    // backgroundColor:'yellow',
    margin:10,
    paddingLeft:10,
  }
})

export default InputComponent;