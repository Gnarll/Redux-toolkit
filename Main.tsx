
import { StyleSheet, View } from 'react-native';
import Pokemon from './src/components/Pokemon';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const  Main = () => {

const pokemons = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur']

const[interval, setInterval] = useState(0) 

console.log(interval);

  return (
      <View style={styles.container}>
        <RNPickerSelect
            value={interval}
            onValueChange={(value) => setInterval(value)}
            items={[
                { label: 'Off', value: 0 },
                { label: '1s', value: 1 },
                { label: '5s', value: 5 },
            ]}
        />
        {pokemons.map((pokemon, index) => {
            return <Pokemon key={index} name={pokemon} pollingInterval={interval} />
        })}
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
  }
});