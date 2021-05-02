import React, { FunctionComponent, useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

type props={
  // type:Types;
  // button:string;
  text : string;
  style : {}
}

const CheckBoxComponent :  FunctionComponent<props> = ({text, style}) =>{

  
  // useEffect(()=>{
  //   setTypes(type);
  // }, []);
  return(
    <View style={style}>
      <Text >{text}</Text>
    </View>
  )
}


export default CheckBoxComponent