import { Action } from "./actions";

export interface NotesState {
    notes: string[];
}

const intitialState = {
    notes: []
}

export const notesReducer = (state:NotesState=intitialState,action:Action) => {
    switch (action.type){
        case "ADD_NOTE": {
            return {...state, notes: [...state.notes, action.payload]}
        }
        default:{
            return state;
        }
    }
}