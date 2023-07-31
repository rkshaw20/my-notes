
import { createSlice } from "@reduxjs/toolkit";


type State={
    home: any[],
    archive: any[],
    trash: any[],
}

const initialState: State={
    home:[],
    archive:[],
    trash:[],
}

const noteSlice=createSlice({
    name:'note',
    initialState,
    reducers:{
        addNote:(state,action)=>{
    
            state.home.push(action.payload);
        },
        updateNote:(state,action)=>{
            const updatedNote=action.payload;
            const updatedList=state.home.map((note)=>note._id===updatedNote._id ? updatedNote :note );
            state.home=updatedList;
        },
        deleteNote:(state,action)=>{
          const noteId=action.payload;
          const updatedList=state.home.filter((note)=>note._id !==noteId);
          state.home=updatedList;
        },
    }
})


export const {addNote,deleteNote,updateNote}=noteSlice.actions;
export default noteSlice.reducer;