import { createSlice } from "@reduxjs/toolkit";

export interface noti{
    content : string,
    action : string,
    currentTime : number,
    expiredTime : number 
}

const time_ = Date.now();

const initialState : noti = {content : "", action : "", currentTime : time_, expiredTime : time_};

const notiReducer = createSlice({
    name: 'noti',
    initialState,
    reducers:{
        showNotification : (state, action) => {
            const currTime = Date.now()
            state = {...action.payload, currentTime : currTime, expiredTime : currTime + 5000 };
            return state;
        },
        setTimer : (state) => {
            
            state = {...state, currentTime : Date.now()};
            return state;
        }
    }
})



export const {showNotification, setTimer} = notiReducer.actions;

export default notiReducer.reducer;