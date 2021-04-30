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
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    height:70,
    width:170,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    alignSelf:'center',
    marginVertical:20,
  },
  text:{
    fontSize:20,
    color:'white'
  }
})

export default ButtonSubmit;