import { createAsyncThunk } from "@reduxjs/toolkit";


export const getAboutContent = createAsyncThunk(
    "mainPage/getAboutContent",
    async () => {
        const response = await fetch("http://127.0.0.1:8000/api/about")
        return response.json()
    }
)