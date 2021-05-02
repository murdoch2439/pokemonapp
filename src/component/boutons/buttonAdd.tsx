import React, { FunctionComponent } from "react";
import {  View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
  handlePress:any;
  icon:string;
  style : {};
}
const ButtonAdd : FunctionComponent<Props> = ({handlePress, icon, style}) =>{

//  const goToAboutScreen = () =>{
//         navigation.navigate('Add')
//     }

  return (
    
    <View onTouchStart={handlePress} style={styles.container}>
      <TouchableOpacity onPress={handlePress} >
        <MaterialCommunityIcons name={icon} style={style} />
        {/* <MaterialIcons name="add" style={styles.icon} /> */}
        {/* <Text >Add</Text> */}
      </TouchableOpacity>
    </View>
    
  )
}

const screen = Dimensions.get("window");
const dimension=  {
  height : screen.height, width : screen.width
};

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
    top : dimension.height - 190 ,
    left: dimension.width - 100,
  }
})

export default ButtonAdd;