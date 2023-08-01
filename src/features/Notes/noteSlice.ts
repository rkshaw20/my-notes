import { createSlice } from "@reduxjs/toolkit";

type State = {
  home: any[];
  archive: any[];
  trash: any[];
  searchInput:string;
};

const initialState: State = {
  home: [],
  archive: [],
  trash: [],
  searchInput:'',
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.home.push(action.payload);
    },
    updateNote: (state, action) => {
      const updatedNote = action.payload;
      const updatedList = state.home.map((note) =>
        note._id === updatedNote._id ? updatedNote : note
      );
      state.home = updatedList;
    },
    moveToArchive: (state, action) => {
      const noteId = action.payload._id;
      const updatedList = state.home.filter((note) => note._id !== noteId);
      state.home = updatedList;
      state.archive.push(action.payload);
    },
    unArchive: (state, action) => {
      const noteId = action.payload._id;
      const updatedList = state.archive.filter((note) => note._id !== noteId);
      state.archive = updatedList;
      state.home.push(action.payload);
    },
    moveToTrash: (state, action) => {
      const noteId = action.payload._id;
      const homeUpdatedList = state.home.filter((note) => note._id !== noteId);
      const archiveUpdatedList = state.archive.filter(
        (note) => note._id !== noteId
      );
      state.home = homeUpdatedList;
      state.archive = archiveUpdatedList;
      state.trash.push(action.payload);
    },
    restoreFromTrash: (state, action) => {
      const noteId = action.payload._id;
      const trashUpdatedList = state.trash.filter(
        (note) => note._id !== noteId
      );
      state.trash = trashUpdatedList;
      state.home.push(action.payload);
    },
    deleteFromTrash: (state, action) => {
      const noteId = action.payload._id;
      const trashUpdatedList = state.trash.filter(
        (note) => note._id !== noteId
      );
      state.trash = trashUpdatedList;
    },
    pinNote: (state, action) => {
      const updatedNote = action.payload;
      const updatedList = state.home.map((note) =>
        note._id === updatedNote._id ? updatedNote : note
      );
      state.home = updatedList;
    },
    searchNotes:(state,action)=>{
      const input=action.payload.toLowerCase().trim();
     state.searchInput=input;

    },
   
  },
});

export const {
  addNote,
  updateNote,
  moveToArchive,
  unArchive,
  moveToTrash,
  restoreFromTrash,
  deleteFromTrash,
  pinNote,
  searchNotes,
} = noteSlice.actions;
export default noteSlice.reducer;
