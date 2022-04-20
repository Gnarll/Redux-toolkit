
import { StyleSheet, Text, View } from 'react-native';
import Pokemon from './src/components/Pokemon';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useEffect } from 'react';
import { getSWCharacter } from './src/services/SWApi';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './src/store';

const  Main = () => {

 const  useAppDispatch = () => useDispatch<AppDispatch>()
const pokemons = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur']

const[interval, setInterval] = useState(0) 
const dispatch = useAppDispatch()

useEffect(() => {
  dispatch(getSWCharacter(6))
}, [])

const characters = useSelector((state) => state.SW)
console.log(characters);

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
        {characters.map((char) => <Text>{char.name}</Text>)}
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