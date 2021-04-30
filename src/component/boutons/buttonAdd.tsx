import React, { FunctionComponent } from "react";
import { Text, View, TouchableOpacity } from "react-native";


type Props = {
  handlePress:any;
 

}
const ButtonAdd : FunctionComponent<Props> = ({handlePress}) =>{

//  const goToAboutScreen = () =>{
//         navigation.navigate('Add')
//     }

  return (
    
    <View>
      <TouchableOpacity onPress={handlePress} >
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
    
  )
}

export default ButtonAdd;