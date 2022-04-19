import React from "react";
import { Image, Text, View } from "react-native";
import { useGetPokemonByNameQuery } from "../services/pokemonApi";


interface MainProps {
  name: string;
    pollingInterval: number;
}



const  Pokemon = ({name, pollingInterval}: MainProps) => {
    
  const { data, error, isLoading } = useGetPokemonByNameQuery(name)
  return (
          <View>
               {error 
               ?
                (
          <Text>Oh no, there was an error</Text>
        ) : isLoading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <>
            <Text>{data.species.name}</Text>
            <Image source={{uri:data.sprites.front_shiny}} style={{width: 100, height: 100}} />
          </>
        ) : null}
          </View>
      );
    }
    
    
export default Pokemon