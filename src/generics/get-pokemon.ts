import axios from "axios";
import { Pokemon } from "../interfaces"; // we've created an interface to ensure matching the API response
// The Pokemon interface is useful to define the answer we're expecting, but doesn't transform the response; it lets us detect posible errors

export const getPokemon = async (pokeid: number):Promise<Pokemon> => {

  const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokeid }`)
  return data
}