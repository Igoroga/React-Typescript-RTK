import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tarifReducer from './reducers/tarifSlice'


const rootReducer = combineReducers({
tarifReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']