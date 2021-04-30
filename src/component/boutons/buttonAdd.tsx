import React, { FunctionComponent } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  handlePress:any;
  icon:any;
 

}
const ButtonAdd : FunctionComponent<Props> = ({handlePress, icon}) =>{

//  const goToAboutScreen = () =>{
//         navigation.navigate('Add')
//     }

  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} >
        {icon}
        {/* <MaterialIcons name="add" style={styles.icon} /> */}
        {/* <Text >Add</Text> */}
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:70,
    width:70,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    position:'absolute',
    top:530,
    left:275,
  }
})

export default ButtonAdd;