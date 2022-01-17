import {combineReducers} from '@reduxjs/toolkit';
import scanner from './scannerSlice';

const rootReducer = combineReducers({
    scanner
})

export default rootReducer
