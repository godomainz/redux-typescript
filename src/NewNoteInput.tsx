import React, { ChangeEvent } from 'react';

interface NewNoteInputProps {
    addNote(note:string): void;
}


const NewNoteInput:React.FC<NewNoteInputProps> = ({addNote}) => {
    const [note, setNote] = React.useState("");

    const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    const onAddNoteClick = () => {
        addNote(note);
        setNote("");
    }

    return(
        <div>
            <input onChange={updateNote} value={note} type="text" name="note" placeholder="Note"></input>
            <button onClick={onAddNoteClick}>Add Note</button>
        </div>
    );

}

export default NewNoteInput;