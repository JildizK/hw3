import { configureStore } from "@reduxjs/toolkit";
import postReduces from './postSlice'

export default configureStore({
    reducer: {
        posts: postReduces
    }
})