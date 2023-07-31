import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "../features/Notes/noteSlice";

const store=configureStore({
    reducer:{
        note:noteSlice,
    }
})




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

