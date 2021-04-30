import React, { FunctionComponent, useEffect, useState } from "react";
import {Image, Platform} from "react-native"
import * as ImagePickerApi from "expo-image-picker"
import { TouchableOpacity } from "react-native-gesture-handler";

const ImagePicker : FunctionComponent = ()=>{
  const [imageUri, setImageUri] = useState<string>("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png");

  useEffect(() => {
    console.log("in imagepicker");
        console.log(imageUri);

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
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  }
  return (
    <>
      <TouchableOpacity onPress={pickImage}>
        <Image source={{uri:imageUri}} style={{height:100, width:100}}/>
      </TouchableOpacity>
    </>
  )
}
export default ImagePicker;