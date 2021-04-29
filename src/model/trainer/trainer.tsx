import TrainerCategory from "./trainer-category";
import Pokedex from "../pokedex";

export default class Trainer {
 // 1. Typage des propiétés d'un pokémon.
 id: number;
 firstName: string;
 lastName: string;
 picture: string;
 age: number;
 created: Date;
 attitudes : string[];

 constructor(id: number, firstName: string, lastName: string, picture: string, age: number, created: Date, category: TrainerCategory, pokedex: Pokedex, story: string, attitudes : string[]) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.picture = picture;
  this.age = age;
  this.created = created;
  this.category = category;
  this.pokedex = pokedex;
  this.story = story;
  this.attitudes = attitudes;
 }

 category : TrainerCategory;
 pokedex : Pokedex;
 story : string;

 getFullName() : string {
     return this.firstName + " - " + this.lastName;
 }

}
