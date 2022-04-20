import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SWApi = axios.create({
    baseURL: 'https://swapi.dev/api',
    timeout: 1000,
})

export const getSWCharacter = createAsyncThunk('SW/getSWCharacters', async (charId: number) => {
    const response = await SWApi.get(`/people/${charId}`)
    const data = response.data
    console.log(data);
    return data
})