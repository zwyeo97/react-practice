import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { createNewNotes } from '../reducers/anecdoteReducer'
import NoteServices from '../services/notes'
const AncedoteForm = () => {

    const dispatch = useDispatch()
    const [input_, setInput] = useState("");
    const addNote_ = async () => {
        const ancedote__: string = input_;
        setInput("");
        const id_ = NoteServices.getId();
        dispatch(createNewNotes({ content: ancedote__, id: id_, votes: 0 }));

    }
    return (<div>
        <h2>create new</h2>
        <form onSubmit={(e: React.SyntheticEvent) => { e.preventDefault(); addNote_() }}>
            <div><input value={input_} onChange={(e) => setInput(e.target.value)} /></div>
            <button>create</button>
        </form>
    </div>
    )
}

export default AncedoteForm;