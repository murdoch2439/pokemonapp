import React, { FunctionComponent, useEffect, useState } from "react";
import {Image, Platform, Text, View, StyleSheet} from "react-native"
import * as ImagePickerApi from "expo-image-picker"
import { TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from '@expo/vector-icons';

type Properties = {
  uri : string,
  name : string;
  onChange : any
}
const ImagePicker : FunctionComponent<Properties> = ({uri, name, onChange})=>{
  const [imageUri, setImageUri] = useState<string>(uri);

  useEffect(() => {
    if(uri)
      setImageUri(uri);

    // console.log("in imagepicker");
    //     console.log(imageUri);

    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePickerApi.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePickerApi.launchImageLibraryAsync({
      mediaTypes: ImagePickerApi.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      onChange(name, imageUri);
    }
  }
  
  return (
    <>
      <TouchableOpacity onPress={pickImage}>
        {!imageUri ? 
          <View style={styles.iconImageContianer}>
            <SimpleLineIcons name="picture" style={styles.icon} />
            <Text style={styles.text}>Add picture</Text>
          </View>
          :
          <Image source={{uri:imageUri}} style={styles.image}/> }

        {/* <Image source={{uri:imageUri}} style={{height:150, width:150}}/> */}
      </TouchableOpacity>
    </>
  )
}



const styles =StyleSheet.create({
  iconImageContianer:{
    height:160,
    width:160,
    // alignSelf:'center',
    backgroundColor:'#E5E5E5',
    borderRadius:5,
  },
  icon:{
    fontSize:130,
    color:'black',
    alignSelf:'center'
  },
  text:{
    fontSize:16,
    textAlign:'center',
  },
  image:{
    height:160, 
    width:160},

})
export default ImagePicker;