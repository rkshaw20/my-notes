
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
        deleteNote:(state,action)=>{
          const noteId=action.payload;
          const updatedList=state.home.filter((note)=>note._id !==noteId);
          state.home=updatedList;
        }
    }
})


export const {addNote,deleteNote}=noteSlice.actions;
export default noteSlice.reducer;