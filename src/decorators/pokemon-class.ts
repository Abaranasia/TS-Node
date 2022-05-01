function printToConsole( constructor: Function ) {
  console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false):Function => { 
  // return () =>  console.log('hola mundo Pok') // Returns a function
  if (print) {
    return printToConsole // Called by reference, without (); otherwise it would return another function
  } else {
    return () => {} // returning a void function
  }
 } // While this decorator only seems to be useful to print in console, it can change the behabior of a complete class if needed

 
 const blockPrototype = function (constructor: Function) { 
   Object.seal ( constructor )
   Object.seal ( constructor.prototype ) // this will block the prototype of the class to avoid accidentally add new properties or methods from outside
  }
  
// Decorators only executes once during transpilation, at the begining
@blockPrototype
// To avoid posible decorators warnings, the must enable the option {"experimentalDecorators": true} in tsconfig.json
@printToConsoleConditional(true)

export class Pokemon {
  public publicApi: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    public name: string
  ) {
    
  }
}