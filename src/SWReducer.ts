import { createSlice } from "@reduxjs/toolkit";
import { getSWCharacter } from "./services/SWApi";


interface SWCharacter { 
        name: string,
        height: number
        mass: number,
        hair_color: string,
        skin_color: string,
        eye_color: string,
        birth_year: string,
        gender: string,
        homeworld: any,
        films: string[],
        species: string[],
        vehicles: string[],
        starships: string[],
        created: Date,
        edited: Date,
        url: string 
}

const initialState: Array<SWCharacter> = [] 

export const SWSlice = createSlice({
    name: 'SW',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSWCharacter.fulfilled, (state, action) => {
            state.push(action.payload)
        } )
    }
})

export const { reducer } = SWSlice