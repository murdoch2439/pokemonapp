import React, { FunctionComponent, useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { NewTypes } from './common/types'

type props={
  // type:Types;
  // button:string;

}

const CheckBoxComponent :  FunctionComponent<props> = () =>{
  console.log(NewTypes);

  // useEffect(()=>{
  //   setTypes(type);
  // }, []);
  return(
    <View style={{marginHorizontal:10}}>
      <Text>Types</Text>
      <View>
        
          {NewTypes.map((type, index)=> { return <Text key={index}>{type}</Text>} )} 
        
        
        
         
        
        {/* <Text>{button}</Text> */}
      </View>
    </View>
  )
}


export default CheckBoxComponent