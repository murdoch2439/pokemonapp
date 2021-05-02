import React, {FunctionComponent} from "react";
import { Text, StyleSheet } from "react-native";
import CheckBoxComponent from "./checkboxComponent";
import { getTypeColor } from "./common/formatType";

type Properties = {
    items: Array<string>
}
const CheckBoxListComponent : FunctionComponent<Properties> = ({items})=>{
    return (
        <Text style={styles.container}>
        
          {items.map((item, index) => <CheckBoxComponent style={styleCkeckBox(item)} key={index} text={item} /> ) } 
        
        </Text>
    );
}

const styleCkeckBox = (checkItem : string) =>{
    const color = getTypeColor(checkItem);
    return StyleSheet.create({
        style:{
            padding:15,
            borderRadius:25,
            marginLeft:10,
            marginTop : 10,
            backgroundColor: color,
        }
    }).style
}

const styles = StyleSheet.create({
    container:{
      flex : 1,
      flexDirection:"row",
    },
  
    checkBoxItem:{
        padding:15,
        borderRadius:25,
        marginLeft:10,
        backgroundColor:"maroon",
    }
  })

export default CheckBoxListComponent