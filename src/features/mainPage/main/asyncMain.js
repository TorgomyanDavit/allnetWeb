import { createAsyncThunk } from "@reduxjs/toolkit";


export const getMainContent = createAsyncThunk(
    "mainPage/getMainContent",
    async () => {
        const response = await fetch("/register")
        return response.json()
    }
)