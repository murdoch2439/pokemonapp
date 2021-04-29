import React, {FunctionComponent, useEffect, useState} from "react";
import {FlatList} from "react-native";
import Trainer from "../../model/trainer/trainer";
import TrainerService from "../../service/trainer-service";
import TrainerCard from "../../component/pokemon/trainer-card";

const TrainerList : FunctionComponent = ()=>{

    const [trainers, setTrainers] = useState<Trainer[]>()

    useEffect(()=>{
        setTrainers(TrainerService.getAllMocks());
    } )

    const handlePress = (trainer : Trainer) =>{

    }

    return(
        <>
            <FlatList
                data={trainers}
                renderItem={ trainerWrapper=> <TrainerCard trainer={trainerWrapper.item} handlePress={handlePress} />}
            />
        </>
    );
}

export default TrainerList;
