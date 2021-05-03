export default class Pokemon {
 // 1. Typage des propiétés d'un pokémon.
 id: number = -1;
 hp: number = 100;
  cp: number = 10;
  name: string = 'name';
  picture: string = 'http://...';
  types: Array<string> = ['Normal'];
  created: Date = new Date()
  
 // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
 setValues(
  id: number,
  hp: number = 100,
  cp: number = 10,
  name: string = 'name',
  picture: string = 'http://...',
  types: Array<string> = ['Normal'],
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