import { createSlice } from "@reduxjs/toolkit"
import NoteService from "../services/notes"
import { setTimer, showNotification } from "./notificationReducer";


export interface ant {
  content : string,
  id: string,
  votes: number,
}

const initialState : Array<ant> = [];
const reducer = createSlice({
    name: 'notes',
    initialState,
    reducers:{
      vote : (state, action) => {
        const id : string = action.payload.id;
        const ancedotesToVote : ant | any = state.find(n => n.id === id);
        const voted = {...ancedotesToVote, votes: ancedotesToVote.votes + 1}
        state = state.map(ance => ance.id !== voted.id ? ance : voted);
        return state.sort((a, b) => b.votes - a.votes);
      },
      addNote : (state, action) => {
        state.push( action.payload);
      },
      setNote : (state, action) => {
        return action.payload;
      }
    }
})


export const { vote, addNote, setNote } = reducer.actions

export const saveVote : any = (item_ : {id : string}) => {
  return async dispatch => {
    const anecdotes = await NoteService.getData();
    const obj : ant = anecdotes.filter(state => state.id === item_.id)[0];
    await NoteService.updateData(obj);
    dispatch(vote(obj));
    dispatch(showNotification({ content: obj.content, action:"vote" }));
    setTimeout(() => {dispatch(setTimer()); console.log("Timer put")}, 5000);
  }
}



export const initialiseNotes : any = () => {
  return async dispatch => {
    const notes = await NoteService.getData()
    dispatch(setNote(notes));
  }
}

export const createNewNotes : any = (item_) => {
  return async dispatch => {
    
    const newNotes = await NoteService.postData(item_);
    dispatch(addNote(newNotes));
    dispatch(showNotification({content: item_.content, action: "add"}));
    setTimeout(() => {
      dispatch(setTimer());
    }, 5000)

  }
}

export default reducer.reducer