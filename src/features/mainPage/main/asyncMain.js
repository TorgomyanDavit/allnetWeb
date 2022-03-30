import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMainContent = createAsyncThunk(
    "mainPage/getMainContent",
    async () => {
        const response = await fetch("http://127.0.0.1:8000/api/home")
        return response.json()
    }
)