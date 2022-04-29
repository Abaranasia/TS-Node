import { Hero as Superhero } from "./classes/Hero";

// import * as HeroClasses from "./classes/Hero"; 
// We're creating an alias for the complete file and then we can use then independly in this way:
// HeroClasses.hero


const ironman= new Superhero('Ironman',  1, 35) // Superhero is an alias, but it references to the class Hero at all levels

console.log(ironman.power);




