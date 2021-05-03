export default class Pokemon {
 // 1. Typage des propiétés d'un pokémon.
 id: number = -1;
 hp: number = 0;
  cp: number = 0;
  name: string = 'name';
  picture: string = 'https://www.maxpixel.net/static/photo/640/Heart-Postcard-Rabbit-Cute-Valentine-3075088.png';
  types: Array<string> = ['Normal'];
  created: Date = new Date()
  
 // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
 setValues(
  id: number,
  hp: number,
  cp: number,
  name: string,
  picture: string ,
  types: Array<string>,
  created: Date = new Date()
 ) {
  // 3. Initialisation des propiétés d'un pokémons.
  this.id = id;
  this.hp = hp;
  this.cp = cp;
  this.name = name;
  this.picture = picture;
  this.types = types;
  this.created = created;
 }
}