import React, {FunctionComponent} from "react";
import { Image, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";


import Trainer from "../../model/trainer/trainer";

type Properties = {
    trainer : Trainer
}
const TrainerDetails : FunctionComponent<Properties> = ({trainer}) =>{

    return (
        <>
            <Image source={{uri: trainer.picture}} />

            <View>
                <Text>
                    {trainer.getFullName()}
                </Text>

                <View>
                    <Text> Pokedex : </Text>
                    <Text> {trainer.pokedex.total} pokemons </Text>
                </View>
            </View>

            <View>
                <Text>Mon histoire</Text>
                <Text>{trainer.story}</Text>
            </View>

        </>
    );
}

const styles = StyleSheet.create({

})
export default TrainerDetails;
