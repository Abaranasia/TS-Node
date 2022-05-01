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

 // A factory decorator is a function that returns a function
 const blockPrototype = function (constructor: Function) { 
   Object.seal ( constructor )
   Object.seal ( constructor.prototype ) // this will block the prototype of the class to avoid accidentally add new properties or methods from outside
  }
  
  function CheckValidPokemonId () {
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
      const originalMethod = descriptor.value;
      console.log( target, propertyKey, descriptor);

        descriptor.value = ( id: number) => {
          if (id <1 || id >800) {
            return console.log('Not valid: the id must be between 1 and 800')
          }else {
            return originalMethod(id)
          }
        }
    }
  }


// Decorators only executes once during transpilation, at the begining
@blockPrototype

// To avoid posible decorators warnings, the must enable the option {"experimentalDecorators": true} in tsconfig.json
@printToConsoleConditional(true)

export class Pokemon {
  public publicApi: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    public name: string
  ) { }

  @CheckValidPokemonId() // Needs () because it is a factory decorator that we need to run and also returns a function
  savePokemonToDB(id: number) {
      console.log(`Pokemon saved in the DB ${ id }`)
  }
}