import React, { FunctionComponent } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";


type Props = {
  handlePress:any;
  title:string;
 

}
const ButtonSubmit : FunctionComponent<Props> = ({handlePress, title}) =>{

//  const goToAboutScreen = () =>{
//         navigation.navigate('Add')
//     }

  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} >
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    height:70,
    width:70,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    position:'absolute',
    top:520,
    left:260
  }
})

export default ButtonSubmit;