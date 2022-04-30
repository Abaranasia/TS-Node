import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Hero, Villain } from "../interfaces"; // imports both interfaces form index.ts exporter

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

console.log(genericFunctionArrow<Hero>(deadpool).realName)