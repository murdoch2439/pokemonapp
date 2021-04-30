import { useNavigation } from "@react-navigation/core";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";


type Props = {

}
const ButtonHeader : FunctionComponent<Props> = () =>{
  const {navigate} = useNavigation()

 const goToAboutScreen = () =>{
        navigate('About')
        // console.log(navigate);
    }

  return (
    
    <View style={{marginRight:15}}>
      <Text onPress={goToAboutScreen}>About</Text>
    </View>
    
  )
}

export default ButtonHeader;