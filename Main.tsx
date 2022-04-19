import { useGetPokemonByNameQuery } from './src/services/pokemonApi';
import { Image, StyleSheet, Text, View } from 'react-native';

const  Main = () => {

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
      <View style={styles.container}>
        {error ? (
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

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});