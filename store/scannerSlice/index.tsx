import {createSlice} from '@reduxjs/toolkit'

/*
ФН  8768232734809
ФД  09382038402390
ФДП 34875398р2379па263а
Дата 2022-01-11
Время 01:22
Сумма 10000
* */


const initialState = {
    data: ''
}

const scannerSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setScannerData: (state, action) => {
            state.data = action.payload
        },
        clearScannerData: (state) => {
            state.data = ''
        }
    },
    extraReducers: {}
})

export const {setScannerData, clearScannerData} = scannerSlice.actions

export default scannerSlice.reducer
