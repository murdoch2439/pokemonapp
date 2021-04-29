import Trainer from "../model/trainer/trainer";

export default class TrainerService{

    static baseUrl : string = "";

    static getAll() : Promise<Trainer[]>{
        return fetch(this.baseUrl).then(response => response.json())
    }

    static save(trainer : Trainer){

    }

    static delete(trainer : Trainer){

    }

    static getAllMocks() : Trainer[] {
        return []
    }
}
