import React, { FunctionComponent, useState } from "react";
import { EventHandler } from "react";
import { useEffect } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard, TextInputChangeEventData, NativeEventEmitter, NativeSyntheticEvent } from "react-native";
import ButtonSubmit from "../component/boutons/buttonSubmit";
import CheckBoxListComponent from "../component/checkbox-list";
import { TypesList } from "../component/common/formatType";
import { InputType } from "../component/common/input-type";
import InputComponent from "../component/InputComponent";
import Pokemon from "../model/pokemon";
import PokemonServiceV2 from "../service/pokemon-service-v2";

type Props = {
  route : any;
  navigation : any
}

type Field = {
  value : any;
}

type Form = {
  name : Field;
  hp : Field;
  cp : Field;
  types : Field;
  picture : Field
}

const PokemonEdit : FunctionComponent<Props> = ({route, navigation}) =>{
  
  let pokemon : Pokemon = route.params? route.params.pokemon : new Pokemon;

  const [form, setForm] = useState<Form>({
    name : {value : pokemon.name},
    hp : {value : pokemon.hp},
    cp : {value : pokemon.cp},
    types : {value : pokemon.types},
    picture: {value : pokemon.picture}
  })

  const onFieldChange = (name : string, value : string ) =>{
    console.log(name, value)
    const updatedField : Field = {[name] : {value : value}}

    setForm({...form, ...updatedField})

    //const fieldName : string = e.target.
  }
  const onSubmit = ()=>{

    pokemon.name = form.name.value
    pokemon.cp = form.cp.value
    pokemon.hp = form.hp.value
    pokemon.picture = form.picture.value

    //console.log(pokemon)
 
    if (PokemonServiceV2.save(pokemon) )
      navigation.navigate("List")
  }
  
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
      <ScrollView>

      <View  >
        
        <View style={{alignSelf:'center', marginTop:10}}>
          
          <InputComponent onChange={onFieldChange} type={InputType.Image} name="picture" value={form.picture.value} />
        </View>
        <View>
          <InputComponent onChange={onFieldChange} type={InputType.Text} name="name" placeholder='Name' value={form.name.value} />
          <InputComponent onChange={onFieldChange} type={InputType.Text} name="cp" placeholder='CP'   value={form.cp.value.toString()} keyboardType="phone-pad"
              maxLength={2}  />
          <InputComponent onChange={onFieldChange} type={InputType.Text} name="hp" placeholder='HP'   value={form.hp.value.toString()} keyboardType="phone-pad"
              maxLength={2}  />
          <CheckBoxListComponent items={TypesList} />
          
          
        </View>
          <ButtonSubmit title="Valider" handlePress={onSubmit} />
      </View>
      </ScrollView>

     </TouchableWithoutFeedback>
  )
}

export default PokemonEdit;