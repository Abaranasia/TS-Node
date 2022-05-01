import { Hero as Superhero } from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero"; 
// We're creating an alias for the complete file and then we can use then independly in this way:
// HeroClasses.hero

import { printObject, genericFunction, genericFunctionArrow } from "./generics/generics";

import { getPokemon } from "./generics/get-pokemon";
import { Hero, Villain } from "./interfaces"; // imports both interfaces form index.ts exporter

import { Pokemon } from "./decorators/pokemon-class";

/*****************  Generics  *******************/
const ironman= new Superhero('Ironman',  1, 35) // Superhero is an alias, but it references to the class Hero at all levels

console.log(ironman.power);

printObject ( 123 );
printObject ( new Date() );
printObject ( {a:1, b:2, c:3 } )
printObject ([1,2,3,4,5]);
printObject( 'Hola mundo');


console.log(genericFunction ( 3.141618 ).toFixed(2)); // Add the toFixed method here will work beacuase it´s a number, but...
//console.log(genericFunction ( 'holis' ).toFixed(2)); // Other arguments with different type will crash and TS won't notify me before, fi not using generic types
console.log(genericFunction ( 'holis').toUpperCase() ) // After defining the generic type, the linked methods will be suggested depending on the data type 

const deadpool = {
 name: 'Deadpool' ,
 realName: 'Wade Winston Wilson',
 dangerLevel: 130
};

console.log(genericFunctionArrow<Hero>(deadpool).realName);


/*****************  Generics Pokemon *******************/

getPokemon(3)
  .then (pokemon => console.log(pokemon.name))
  .catch (resp => console.log(resp))
  .finally (() => console.log('terminado'))


/*****************  Generics Pokemon class *******************/

const charmander = new Pokemon ('Charmander');

charmander.savePokemonToDB(5000); // We need to validate the parameter to send, something that could be done with a decorator