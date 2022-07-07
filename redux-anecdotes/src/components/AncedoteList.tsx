import { ant, initialiseNotes, saveVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { useEffect } from 'react'


const AncedoteList = () => {
    const anecdotes = useSelector<RootState, Array<ant>>(state => state.notes)
    const dispatch = useDispatch();
    const to_filter : String = useSelector<RootState, String>(state => state.filter);


    useEffect(()=>{
        dispatch(initialiseNotes());
    },[dispatch])

    return (
        <div>
            {anecdotes.filter(anecdote => to_filter === "" ? anecdote : anecdote.content.search(String(to_filter)) > -1).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => {
                            dispatch(saveVote({ id: anecdote.id }));
                           
                        }}>vote</button> {/*//another way is vote(id)*/}
                    </div>
                </div>
            )}</div>)
}

export default AncedoteList;