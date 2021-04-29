import React, { FunctionComponent } from "react";
import { Image, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Trainer from "../../model/trainer/trainer";
import {card} from "../common/style/trainer-styler";

type Properties = {
    trainer : Trainer;
    handlePress: any;
}

const TrainerCard : FunctionComponent<Properties> = ({trainer, handlePress}) => {

    return(
        <>
            <TouchableWithoutFeedback onPress={handlePress(trainer)}>

                <View style={card.container}>
                    <View style={card.picture}>

                        <Image source={{uri:trainer.picture}} style={card.image} />
                    </View>
                    <View style={{padding:10}}>
                        <Text style={card.title}>
                            {trainer.getFullName()}
                        </Text>

                        <Text>
                            {trainer.category}
                        </Text>

                        <Text>Point de vie</Text>
                    </View>
                </View>

            </TouchableWithoutFeedback>

        </>
    );
}

export default TrainerCard;
