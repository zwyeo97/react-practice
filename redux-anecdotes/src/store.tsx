import { configureStore } from '@reduxjs/toolkit'
import ancedoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore({
    reducer: {
      notes: ancedoteReducer,
      noti: notificationReducer,
      filter: filterReducer
    }
})

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>

export default store;