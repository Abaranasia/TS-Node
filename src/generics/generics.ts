export const printObject = ( argument:any ) => {
  console.log(argument)
};

// export function genericFunction (argument: any ) { // <T> Indicates that this is a generic type
// This function will not identify and filter the type of the data introduced by the function when it's called

export function genericFunction<T>(argument: T ): T { // <T> Indicates that this is a generic type
  // Using T we're defining it's a generic type that will be indeity and filtered and won't allow to use, 
  // for example, the toFixed method on not numeric data types.
  // Using the generic type will also show the related methods depending on the data type
  return argument;
}

export const genericFunctionArrow = <T>(argument: T) => argument;
