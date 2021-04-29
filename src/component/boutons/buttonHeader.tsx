import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";


type Props = {
navigation: any;

}
const ButtonHeader : FunctionComponent<Props> = ({ navigation}) =>{

 const goToAboutScreen = () =>{
        navigation.navigate('Notifications')
    }

  return (
    
    <View>
      <Text onPress={(goToAboutScreen)}>About</Text>
    </View>
    
  )
}

export default ButtonHeader;